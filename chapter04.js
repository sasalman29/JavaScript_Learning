// Exercise 1
for (let i = 2; i <= 50; i += 2) console.log(i);

// Exercise 2
let sum = 0;
for (let i = 1; i <= 100; i++) sum += i;
console.log("Loop Sum:", sum); // 5050
console.log("Formula Sum:", (100 * 101) / 2); // 5050

// Exercise 3
for (let i = 1; i <= 10; i++) console.log(`7 x ${i} = ${7 * i}`);

// Exercise 4
for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) line += "*";
  console.log(line);
}

// Exercise 5
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}