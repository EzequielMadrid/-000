/* 
// EJERCICIO 1 🌟

let x = 0;
let y = 0;

for (let i = 1; i <= 10; i++) {
  x += i;
  console.log(x, i); // profundizando que pasa en cada vuelta
  if (i > 5) {
    y++;
  }
}

console.log("resultado de x: ", x); // 1.a
console.log("resultado de y: ", y); // 1.b
 */

/*
// EJERCICIO 2 🌟

let nick = prompt("name please");
let score = parseFloat(prompt("score please"));
let addScore = 0;
let totalScore = 0;

while (nick != "ESC" && score >= 1 && score <= 10) {
  addScore += score;
  totalScore++;
  console.log(`${nick}|${score}`); // 2.c
  nick = prompt("name please");
  if (nick != "ESC") {
    score = parseFloat(prompt("score please"));
  }
}

let average = addScore / totalScore;
console.log(`final average: ${average}`);
*/

/* 
// EJERCICIO 3 🌟

let weather = prompt("what is the weather like?");
switch (weather.toLocaleLowerCase()) {
  case "templado":
    alert("buzito tranqui");
    break;
  case "calorsito":
    alert("remeruki");
    break;
  case "frio":
    alert("camperón");
    break;
  case "viento":
    alert("chaleco está bien");
    break;
  default:
    break;
} 
*/

/*
// EJERCICIO 4 🌟

for (let i = 0; i <= 13; i++) {
  if (i % 2 === 0) console.log(i + " " + "even");
  else console.log(i + " " + "odd");
}
*/
