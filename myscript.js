var nome = prompt("Inserisci il tuo nome");
var cognome = prompt("Inserisci il tuo cognome");
var colore = prompt("Inserisci il tuo colore preferito");

document.getElementById('text').innerHTML = 'La tua password è: ' + (nome + cognome + colore).toLowerCase() + '21';