// WPU Coding challenge 2024
// 24/366
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

// const quarterOf = (month) => {
//   if (month <= 3) {
//     return 1;
//   } else if (month <= 6) {
//     return 2;
//   } else if (month <= 9) {
//     return 3;
//   } else if (month <= 12) {
//     return 4;
//   }
// };

const quarterOf = (month) =>
  month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;

console.log(quarterOf(3));
