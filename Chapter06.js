// Exercise 1
const nums = [3, 7, 2, 9, 4];
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) max = nums[i];
}
console.log("Max:", max);

// Exercise 2
const taka = [100, 250, 450];
const bdt = taka.map((amt) => `${amt} BDT`);
console.log(bdt);

// Exercise 3
const names = ["Sammu", "Sallu", "Sayma", "Salman"];
const longNames = names.filter((n) => n.length > 4);
console.log(longNames);

// Exercise 4
const numbers = [1, 2, 3, 4, 5, 6, 8];
const evenCount = numbers.reduce((acc, curr) => (curr % 2 === 0 ? acc + 1 : acc), 0);
console.log("Even count:", evenCount);

// Exercise 5
const students = [
  { name: "Asha", cgpa: 3.7 },
  { name: "Rafi", cgpa: 3.2 },
  { name: "Mim", cgpa: 3.9 },
];
const toppers = students.filter((s) => s.cgpa >= 3.5).map((s) => s.name);
console.log(toppers);

// Exercise 6
const products = [
  { item: "Book", price: 450 },
  { item: "Pen", price: 15 },
  { item: "Laptop", price: 55000 },
];
products.sort((a, b) => b.price - a.price);
console.log(products);