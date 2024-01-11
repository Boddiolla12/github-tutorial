const gruppe = ["Jostein", "Elisabet", "Petter", "Vilde"];

const ny_endret_liste = gruppe.map((navn) => {
  // Kode som kjøres for alle elementer
  //manipulerer database
  return navn.toLocaleUpperCase();
});

const foreach_liste = gruppe.forEach((navn) => {
  // Kode som kjøres for alle elementer //
  console.log(navn, navn.length);
});

console.log(gruppe, ny_endret_liste, foreach_liste);

function skru_på_lys() {
  // send signal
  // send strøm
  // skru på strøm teller
  // start strømteller tid
  // ta ned persienner
}
