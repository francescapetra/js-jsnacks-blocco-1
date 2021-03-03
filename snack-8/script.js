var numero;
var somma;


numero = prompt("inserisci numero");

somma = 0;


for (var i = 1; i < numero.length; i++) {
  somma += parseInt(numero[i]);
}
console.log(somma);
