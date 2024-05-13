// <!-- In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.  -->


const Invitati = ["Gatsby", "Robin", "Mario", "Paolo", "Giuseppe", "Gino", "Marco", "Giorgio", "Giulia", "Maria", "Giada", "Giovanna", "Giuliana", "Giulio", "Giuseppina", "Giorgia"];

let nome = prompt("Inserisci il tuo nome.");

if (Invitati.includes(nome)) {
    alert("Ciao " + nome + ", puoi partecipare alla festa del grande Gatsby!");
} else {
    alert("Hei! " + nome + " Non sei sulla lista! SPARISCI!!");
}
