// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di 3 invitati.

var nomi = ["Maria", "Laura", "Mia"];
var nuovonome = prompt("inserisci nome");
nomi.push(nuovonome);

var cognomi = ["Bella", "Brutta", "Cattiva"]
var nuovocognome = prompt ("inserisci cognome")
cognomi.push(nuovocognome);

var lista = [];


for (var i = 1; i <=nomi.length; i++) {

  var falsonome = Math.floor(Math.random(nomi [i]) * nomi.length);
  var falsocognome = Math.floor(Math.random(cognomi [i]) * cognomi.length);

  var fake = nomi[falsonome] + " " +  cognomi[falsocognome]
  lista.push( fake);

}
console.log(lista);
