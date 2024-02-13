// WPU Coding challenge 2024
// 15/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// function sumArray(array) {
//   let result = 0;
//   if (array == false) {
//     return (result = 0);
//   } else if (array.length <= 2) {
//     return (result = 0);
//   } else {
//     if (Math.min(...array)) {
//       result += 0;
//     } else if (Math.max(...array)) {
//       result += 0;
//     } else {
//       for (let i = 0; i < array.length; i++) {
//         result += array[i];
//       }
//       return result;
//     }
//   }
// }

// function sumArray(array) {
//   if (array === null || array.length <= 2) return 0;

//   const sorted = array.sort((a, b) => a - b);
//   let result = 0;
//   for (let i = 1; i < sorted.length - 1; i++) {
//     result += sorted[i];
//   }
//   return result;
// }

function sumArray(array) {
  if (array === null || array.length <= 2) return 0;

  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, c) => a + c);
}

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
