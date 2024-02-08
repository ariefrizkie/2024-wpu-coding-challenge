// WPU Coding challenge 2024
// 13/366
// https://www.codewars.com/kata/5bb904724c47249b10000131

// function points(games) {
//   let totalPointsX = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (+games[i].split(":")[0] === +games[i].split(":")[1]) {
//       totalPointsX += 1;
//     } else if (+games[i].split(":")[0] > +games[i].split(":")[1]) {
//       totalPointsX += 3;
//     } else {
//       totalPointsX += 0;
//     }
//   }
//   return totalPointsX;
// }

// function points(games) {
//     let totalPointsX = 0;
//     for (i = 0; i < games.length; i++) {
//       if (+games[i][0] === +games[i][2]) {
//         totalPointsX += 1;
//       } else if (+games[i][0] > +games[i][2]) {
//         totalPointsX += 3;
//       } else {
//         totalPointsX += 0;
//       }
//     }
//     return totalPointsX;
//   }

const points = (games) =>
  games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0);

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
