// WPU Coding challenge 2024
// 18/366
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

// function greet(name, owner) {
//     if (name === owner) {
//       return "Hello boss";
//     }
//     return "Hello guest";
//   }

// const greet = (name, owner) => {
//   if (name === owner) {
//     return "Hello boss";
//   }
//   return "Hello guest";
// }

const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));
