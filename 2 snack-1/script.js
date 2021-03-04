// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti.
// Esegui questo programma in due versioni, con il for
// e con il while.

// FOR
// var numero;
//
// var somma = 0;
//
// for (var i = 1; i <=5; i++) {
//
// numero = parseInt(prompt("inserisci 5 numeri"));
//
// somma += parseInt(numero);
//
// console.log(somma);
// }

// WHILE

var numero;

var somma = 0;

var i = 1;

do {
  numero = parseInt(prompt("inserisci 5 numeri"));
  somma += parseInt(numero);
  i++;

} while ( i <=5);
console.log(somma);
