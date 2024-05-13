

// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero. se è dispari inseriscilo nell'array

for (let i = 0; i < 6; i++) {
    const numbers = [];
let userNumber = Number.parseInt(prompt("Inserisci un numero: "));

if (userNumber % 2 === 1) { 
    numbers.push(userNumber);
}
}

console.log(numbers);
