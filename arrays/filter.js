const name1 = "Jostein";
const name2 = "Elisabet";
const name3 = "Petter";
const name4 = "Vilde";

const gruppe1 = ["Jostein", "Elisabet", "Petter", "Vilde"];
const gruppe1_leder = gruppe1[3];

gruppe1.push("Oskar", "Ole Thomas", "Glenn");
gruppe1.push("Kjell", "Roger");
gruppe1[2] = "Vidar";

// push
// push
console.log(
  "gruppemedlemmer:",
  gruppe1,
  "antall:",
  gruppe1.length,
  "gruppe leder:",
  gruppe1_leder
);

console.log(gruppe1[5]);

let fjerner_elev = gruppe1.pop();
console.log(gruppe1, "fjernet", fjerner_elev);

fjerner_elev = gruppe1.pop();
console.log(gruppe1, "fjernet", fjerner_elev);

// hello
fjerner_elev = gruppe1.pop();
console.log(gruppe1, "fjernet", fjerner_elev);

// dette er en test for å legge til nytt repo i github
