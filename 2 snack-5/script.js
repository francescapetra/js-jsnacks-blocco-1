// Crea due array che hanno n elementi diversi
var colori = ["rosso", "verde", "blu "];

var animali = ["cane", "gatto", "topo", "criceto","lupo", "coniglio"];

// add elementi casuali all'array che ne ha meno finchè pareggia

i = animali.length;

do {
  var nuovo = prompt("inserisci elemento");

  if (colori.length > animali.length) {
    animali.push(nuovo);

  }else if (colori.length < animali.length) {
    colori.push(nuovo);

  }

 i++;

} while (i< colori.length);


console.log(animali);
console.log(colori);
