// L’utente inserisce due numeri in successione, con due prompt.
var primoNumero = parseInt(prompt("inserisci un numero"));
// console.log (primoNumero);

var secondoNumero = parseInt(prompt("inserisci un nuovo numero"));
// console.log (secondoNumero);
// Il software stampa il maggiore.

if (primoNumero > secondoNumero) {
 console.log(primoNumero);
}else if (secondoNumero > primoNumero) {
 console.log(secondoNumero);
}else {
  console.log ("pari");
}
