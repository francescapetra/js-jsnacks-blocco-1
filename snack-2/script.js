// L’utente inserisce due parole in successione, con due prompt.
var primaParola = prompt("inserisci una parola");
// console.log (primaParola);

var secondaParola = prompt("inserisci una nuova parola");
// console.log (secondaParola);
// Il software stampa prima la parola più corta, poi la parola più lunga.

if (primaParola.length > secondaParola.length) {
  console.log(secondaParola);
}
else if (primaParola.length < secondaParola.length) {
  console.log(primaParola); {
}
}else {
  console.log ("stessa lunghezza");
}
