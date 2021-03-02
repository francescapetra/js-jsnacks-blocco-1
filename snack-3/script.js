// Il software deve chiedere per 10 volte all’utente di inserire
// un numero.
var somma = 0;
// console.log(numero);
// Il programma stampa la somma di tutti i numeri
// inseriti.
for (var i = 1; i <= 10; i++) {
  var numero =  parseInt(prompt("inserisci numero"));

  somma = somma + numero;

}
console.log( somma);
