/* funzione intToRoman(num)
    dichiara un array di oggetti romanNumerals
        ogni oggetto ha due proprietà: value (valore numerico) e symbol (simbolo romano)
    
    inizializza una stringa vuota result
    
    per ogni oggetto numeral in romanNumerals
        finché num è maggiore o uguale al valore di numeral
            aggiungi il simbolo di numeral a result
            sottrai il valore di numeral da num
    
    restituisci result
fine funzione */



function intToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';
    for (const numeral of romanNumerals) {
        while (num >= numeral.value) {
            result += numeral.symbol;
            num -= numeral.value;
        }
    }

    return result;
}


console.log(intToRoman(3));    
console.log(intToRoman(9));    
console.log(intToRoman(58));   
console.log(intToRoman(1994));
