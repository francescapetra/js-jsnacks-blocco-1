// crea un array di numeri interi e fai la somma di quelli in posizione dispari

var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];

var somma = 0;

for (var i = 0; i <numeri.length; i++) {

  if (numeri[i] % 2 ==1) {
    console.log(numeri[i]);
    somma += numeri[i];
  }
}
console.log(somma);
