// WPU Coding challenge 2024
// 3/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// function hero(bullets, dragons) {
//   const attact = bullets - dragons * 2;
//   if (attact >= 0) {
//     result = true;
//   } else {
//     result = false;
//   }

//   return result;
// }

// function hero(bullets, dragons) {
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function hero(bullets, dragons) {
//     return bullets / 2 >= dragons;
//   }

const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(9, 5));
