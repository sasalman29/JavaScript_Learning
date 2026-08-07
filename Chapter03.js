// Exercise 1
const num = -5;
if (num > 0) console.log("Positive");
else if (num < 0) console.log("Negative");
else console.log("Zero");

// Exercise 2
const temp = 25;
if (temp > 32) console.log("Hot");
else if (temp >= 20 && temp <= 32) console.log("Pleasant");
else console.log("Cold");

// Exercise 3
const val = 7;
console.log(val % 2 === 0 ? "Even" : "Odd");

// Exercise 4
const month = 4;
switch (month) {
  case 12: case 1: case 2: console.log("Winter"); break;
  case 3: case 4: console.log("Summer"); break;
  case 5: case 6: console.log("Monsoon"); break;
  case 7: case 8: console.log("Autumn"); break;
  case 9: case 10: console.log("Late Autumn"); break;
  case 11: console.log("Pre-Winter"); break;
  default: console.log("Invalid month");
}