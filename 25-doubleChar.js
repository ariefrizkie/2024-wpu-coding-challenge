// WPU Coding challenge 2024
// 25/366
// https://www.codewars.com/kata/56b1f01c247c01db92000076

// function doubleChar(str) {
//   let result ='';
//   for(let i = 0; i<str.length; i++) {
//     result += str[i];
//     result += str[i];
//   }
//   return result
// }

const doubleChar = (str) => [...str].map((el) => el + el).join("");

console.log(doubleChar("abcd"));
