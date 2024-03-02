// WPU Coding challenge 2024
// 20/366
// https://www.codewars.com/kata/5aa736a455f906981800360d

// function feast(beast, dish) {
//   const beastName = beast.toLowerCase().split("");
//   const dishName = dish.toLowerCase().split("");
//   if (
//     beastName[0] === dishName[0] &&
//     beastName[beastName.length - 1] === dishName[dishName.length - 1]
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("brown bear", "bear claw"));
