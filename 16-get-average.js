// WPU Coding challenge 2024
// 16/366
// https://www.codewars.com/kata/563e320cee5dddcf77000158

// function getAverage(marks) {
//   let result = 0;
//   for (let i = 0; i < marks.length; i++) {
//     result += marks[i];
//   }
//   return Math.floor((result /= marks.length - 1));
// }

const getAverage = (marks) =>
  Math.floor(marks.reduce((a, c) => a + c, 0) / marks.length);

console.log(getAverage([1, 2, 3, 4, 5]));
