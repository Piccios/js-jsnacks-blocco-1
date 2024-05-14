// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


let numbers = [1, 6, 5, 3, 4, 8, 13, 18, 19, 31]

let somma = 0;

for (let index = 0; index < numbers.length; index++) {
    if (index % 2!== 0) {
        somma += numbers[index]
    }
}

console.log( numbers + ' ' + somma)