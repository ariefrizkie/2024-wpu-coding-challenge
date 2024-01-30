// WPU Coding challenge 2024
// 1/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// function DNAtoRNA(dna) {
//   const arrDna = dna.split("");
//   let result = [];

//   for (let i = 0; i < arrDna.length; i++) {
//     if (arrDna[i] === "T") {
//       result.push("U");
//     } else {
//       result.push(arrDna[i]);
//     }
//   }
//   return result.join("");
// }

// function DNAtoRNA(dna) {
//   let rna = [];

//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "T") {
//       rna += "U";
//     } else {
//       rna += dna[i];
//     }
//   }
//   return rna;
// }

// function DNAtoRNA(dna) {
//   let rna = [];

//   for (let i = 0; i < dna.length; i++) {
//     rna += dna[i] === "T" ? "U" : dna[i];
//   }
//   return rna;
// }

const DNAtoRNA = (dna) => {
  return dna
    .split("")
    .map((el) => (el === "T" ? "U" : el))
    .join("");
};

console.log(DNAtoRNA("GCAT"));
