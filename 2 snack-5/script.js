// // Crea due array che hanno n elementi diversi
// var animali = ["cane", "gatto", "topo", "criceto","lupo", "coniglio"];
//
// var colori = ["rosso", "verde", "blu "];
//
// i = colori.length;
//
// do {
//   var nuovo = prompt("inserisci elemento");
//
//   if (colori.length > animali.length) {
//     animali.push(nuovo);
//
//   }else if (colori.length < animali.length) {
//     colori.push(nuovo);
//
//   }
//
//  i++;
//
// } while (i< animali.length);
//
//
// console.log(animali);
// console.log(colori);

  var nuovo;
  var maggiore;
  var minore;

do {
// add elementi casuali all'array che ne ha meno finchè pareggia
  nuovo = prompt("nuovo elemento");
  console.log(nuovo);

  if (animali.length> colori.length) {
    maggiore = animali.length;
    minore = colori.length;
    colori.push(nuovo);
    console.log(colori);
  }

  else if (animali.length < colori.length) {
    maggiore = colori.length;
    minore = animali.length;
    animali.push(nuovo);
    console.log(animali);
  }
minore++;
console.log(minore+"---"+maggiore);
} while (minore<maggiore);

console.log(animali);
console.log(colori);
