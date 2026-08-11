// Exercise 1
const isEven = (n) => n % 2 === 0;
for (let i = 1; i <= 10; i++) console.log(`${i} is even: ${isEven(i)}`);

// Exercise 2
function celsiusToFahrenheit(c) {
  return c * (9 / 5) + 32;
}
console.log(celsiusToFahrenheit(30)); // 86

// Exercise 3
function max3(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}
console.log(max3(12, 45, 23)); // 45

// Exercise 4
function fizzbuzz(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

// Exercise 5
function applyTwice(fn, value) {
  return fn(fn(value));
}
const double = (x) => x * 2;
console.log(applyTwice(double, 5)); // 20