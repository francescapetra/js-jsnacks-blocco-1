// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// creo array oggetti
var squadre = [
  {
    nome: "Atalanta",
    punti: 0,
    falli : 0,
  },
  {
    nome: "Roma",
    punti: 0,
    falli : 0,
  },
  {
    nome: "Benevento",
    punti: 0,
    falli : 0,
  },
];
console.log(squadre);
// 2 step:
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// creo una variabile fuori dove prendo l'indice dell'objt

// var squadre[i];
function randomGeneratore(min, max){
  var numeriCpu = Math.floor(Math.random() * max) + 1;
  return numeriCpu;
}

for (var i = 0; i < squadre.length; i++) {

  squadre[i].punti = randomGeneratore(0, 10);
  squadre[i].falli = randomGeneratore(0, 10);
  console.log(squadre[i].punti);
}

// 3 step:
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
//
var nuovoArray = [];

for (var i = 0; i < squadre.length; i++) {

nuovoArray.push({
  nome: squadre[i].nome,
  falli: squadre[i].falli

});
}
console.log(nuovoArray);
