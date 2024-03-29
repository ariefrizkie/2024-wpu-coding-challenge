// WPU Coding challenge 2024
// 17/366
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// const areaOrPerimeter = function (l, w) {
//   if (l === w) {
//     return (l *= w);
//   } else {
//     return l * 2 + w * 2;
//   }
// };

const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));
