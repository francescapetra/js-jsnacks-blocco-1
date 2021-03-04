// Crea due array che hanno n elementi diversi
var colori = ["rosso", "verde", "blu "];

var animali = ["cane", "gatto", "topo", "criceto","lupo", "coniglio"];

// add elementi casuali all'array che ne ha meno finchè pareggia
var nuovo = prompt("inserisci elemento");
console.log(nuovo);

if (colori.lenght > animali.length) {
  animali.push(nuovo);
}
else if (colori.lenght < animali.length) {
  colori.push(nuovo);
}
console.log(animali);
console.log(colori);
