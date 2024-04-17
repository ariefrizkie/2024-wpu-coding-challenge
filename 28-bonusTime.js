// WPU Coding challenge 2024
// 25/366
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// function bonusTime(salary, bonus) {
//   if (bonus) {
//     return `\u00A3${salary * 10}`;
//   } else {
//     return `\u00A3${salary}`;
//   }
// }

// function bonusTime(salary, bonus) {
//       return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`;
//   }

const bonusTime = (salary, bonus) =>
  bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`;

console.log(bonusTime(10000, true));
console.log(bonusTime(10000, false));
