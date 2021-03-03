var numero;
var cubo;

 do {
   numero = parseInt(prompt("inserisci un numero"));
 } while (isNaN(numero));


for (var i = 1; i <= numero; i++) {
cubo = Math.pow(numero , 3);

}
console.log (cubo);
