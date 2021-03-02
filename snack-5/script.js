// Crea un array vuoto.
var vuoto = [];

// Chiedi per 6 volte all’utente di inserireun numero,
for (var i = 1; i <=6; i++) {
var numero = parseInt(prompt( "inserisci un numero"));

if (numero  % 2 == 1){
vuoto.push(numero);
console.log(vuoto);
}
}
// se è dispari inseriscilo nell’array.
