// WPU Coding challenge 2024
// 14/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// function getGrade(s1, s2, s3) {
//   const average = (s1 + s2 + s3) / 3;
//   if (average < 60) {
//     return "F";
//   } else if (average < 70) {
//     return "D";
//   } else if (average < 80) {
//     return "C";
//   } else if (average < 90) {
//     return "B";
//   } else if (average < 100) {
//     return "A";
//   }
// }

function getGrade(...s) {
  const average = s.reduce((acc, curr) => acc + curr) / s.length;
  if (average < 60) {
    return "F";
  } else if (average < 70) {
    return "D";
  } else if (average < 80) {
    return "C";
  } else if (average < 90) {
    return "B";
  } else if (average < 100) {
    return "A";
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(82, 85, 87));
