
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

// poi i multipli di 5 verranno stampari con un testo giallo 

const array = [3, 5, 7, 3, 4, 2, 1, 6, 10, 18, 21, 15]

// creo due div nel main con id rosso e verde

let divVerde = document.createElement('div');


let divRosso = document.createElement('div');

//stampo in divVerde i numeri dispari e in divRosso i numeri pari presenti in array 

if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            divVerde.innerHTML += array[i];
        } else {
            divRosso.innerHTML += array[i];
        }
    }
}

// inserisco i due div nell'html

document.body.appendChild(divVerde);
document.body.appendChild(divRosso);
