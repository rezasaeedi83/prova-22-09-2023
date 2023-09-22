/* funzione analizzaSpese(speseString)
    righe = dividere speseString usando '\n'
    risultati = array vuoto
    repartoCorrente = null
    spesaTotale = 0
    inizioReparto = vero

    per ogni riga in righe
        rigaSenzaSpazi = ""
        
        per ogni carattere nella riga
            se il carattere non è uno spazio e non è un tabulatore
                aggiungio il carattere a rigaSenzaSpazi

        se rigaSenzaSpazi è vuota
            continua

        se la riga inizia con uno spazio o un tabulatore
            importo = converti rigaSenzaSpazi in numero
            se importo non è un numero
                continua
            spesaTotale = spesaTotale + importo
        altrimenti
            se inizioReparto è falso
                aggiungi {reparto: repartoCorrente, spesa: spesaTotale} a risultati
            repartoCorrente = rigaSenzaSpazi
            spesaTotale = 0
            inizioReparto = falso

    se repartoCorrente non è nullo
        aggiungi {reparto: repartoCorrente, spesa: spesaTotale} a risultati

    restituisci risultati
fine funzione */



function analizzaSpese(speseString) {
    let righe = speseString.split('\n');
    let risultati = [];
    let repartoCorrente = null;
    let spesaTotale = 0;
    let inizioReparto = true;

    for (let i = 0; i < righe.length; i++) {
        let riga = righe[i];

        
        let rigaSenzaSpazi = "";
        for (let j = 0; j < riga.length; j++) {
            if (riga[j] !== ' ' && riga[j] !== '\t') {
                rigaSenzaSpazi += riga[j];
            }
        }

        if (rigaSenzaSpazi === "") {
            continue;
        }

         
        if (riga[0] === ' ' || riga[0] === '\t') {
            let importo = parseInt(rigaSenzaSpazi);
            if (!isNaN(importo)) {
                spesaTotale += importo;
            }
        } else {
            
            if (!inizioReparto) {
                risultati.push({ reparto: repartoCorrente, spesa: spesaTotale });
            }

            repartoCorrente = rigaSenzaSpazi;
            spesaTotale = 0;
            inizioReparto = false;
        }
    }

   
    if (repartoCorrente !== null) {
        risultati.push({ reparto: repartoCorrente, spesa: spesaTotale });
    }

    return risultati;
}


let speseString = `
Cancelleria
500
40
60
Servizi igienici
1000
1
200
Vendite
0
`;

let risultati = analizzaSpese(speseString);
console.log(risultati);
