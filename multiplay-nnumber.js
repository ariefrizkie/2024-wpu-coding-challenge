// WPU Coding challenge 2024
// 16/366
// https://www.codewars.com/kata/5708f682c69b48047b000e07

// function multiply(number) {
//   const digit = Math.abs(number).toString().length;
//   return Math.pow(5, digit) * number;
// }

const multiply = (number) =>
  Math.pow(5, Math.abs(number).toString().length) * number;

console.log(multiply(10));
console.log(multiply(-2));
