// WPU Coding challenge 2024
// 21/366
// https://www.codewars.com/kata/568d0dd208ee69389d000016

// function rentalCarCost(d) {
//   if (d >= 7) {
//     return 40 * d - 50;
//   } else if (d >= 3) {
//     return 40 * d - 20;
//   } else {
//     return 40 * d;
//   }
// }

const rentalCarCost = (d) => {
  return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
};

console.log(rentalCarCost(1));
console.log(rentalCarCost(4));
console.log(rentalCarCost(8));
