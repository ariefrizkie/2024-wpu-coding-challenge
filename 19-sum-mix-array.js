// WPU Coding challenge 2024
// 19/366
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// function sumMix(x) {
//   let result = 0;
//   for (let i = 0; i < x.length; i++) {
//     result += Number(x[i]);
//   }
//   return result;
// }

// function sumMix(x) {
//   return x.reduce((acc, curr) => Number(acc) + Number(curr));
// }

const sumMix = (x) => x.reduce((acc, curr) => acc + Number(curr), 0);

console.log(sumMix([9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
