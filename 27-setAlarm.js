// WPU Coding challenge 2024
// 25/366
// https://www.codewars.com/kata/568dcc3c7f12767a62000038

// function setAlarm(employed, vacation) {
//   if (employed && vacation === true) {
//     return false;
//   } else if (employed === true && vacation === false) {
//     return true;
//   } else if (employed === false && vacation === true) {
//     return false;
//   } else if (employed === false && vacation === false) {
//     return false;
//   }
// }

// function setAlarm(employed, vacation) {
//   if (employed && !vacation) {
//     return true;
//   } else {
//     return false;
//   }
// }

const setAlarm = (employed, vacation) => employed && !vacation;

console.log(setAlarm(true, true));
console.log(setAlarm(true, false));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));
