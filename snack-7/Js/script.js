Snack7
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo. 

const N = Number.parseInt(prompt("Inserisci un numero: "));

// creo tanti array per il valore di N ( se N = 6 allora creo 6 array)

for (let i = 0; i < N; i++) {
    const numbers = [];
    for (let j = 0; j < 10; j++) {
        numbers.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(numbers);
}


