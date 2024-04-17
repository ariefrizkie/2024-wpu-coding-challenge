// WPU Coding challenge 2024
// 25/366
//https://www.codewars.com/kata/58649884a1659ed6cb000072

// function updateLight(current) {
//   if (current === "green") {
//     return "yellow";
//   }
//   if (current === "yellow") {
//     return "red";
//   }
//   if (current === "red") {
//     return "green";
//   }
// }

const updateLight = (current) =>
  current === "green" ? "yellow" : current === "yellow" ? "red" : "green";

console.log(updateLight("red"));
