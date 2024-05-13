

// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero. se è dispari inseriscilo nell'array


const numbers = [];

let userNumber = Number.parseInt(prompt("Inserisci un numero: "));

if (userNumber % 2 === 0) { 
    numbers.push(userNumber);
}