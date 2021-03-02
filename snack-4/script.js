// In un array sono contenuti i nomi degli invitati alla festa del
// grande Inzaghi
var invitati = ["Fra", "Ele", "Lore", "Sam", "Chia"];
// chiedi all’utente il suo nome
var nome = prompt("Qual è il tuo nome?");
// comunicagli se può partecipare o no alla festa.
var autorizzato ;


for (var i = 0; i < invitati.length; i++) {
  console.log(invitati[i]);

  if (nome == invitati[i]) {
    autorizzato = nome;
  }
}
if (autorizzato == nome) {
  alert ("sei stato invitato");
}
else{
  alert ("non sei sttao invitato");
}
