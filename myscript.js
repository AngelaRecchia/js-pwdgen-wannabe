var nome = prompt("Inserisci il tuo nome");
var cognome = prompt("Inserisci il tuo cognome");
var colore = prompt("Inserisci il tuo colore preferito");

document.getElementById('text').innerHTML = (nome + cognome + colore).toLowerCase() + '21';