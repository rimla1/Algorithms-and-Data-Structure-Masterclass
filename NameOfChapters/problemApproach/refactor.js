// // Before refactoring!
// function charCount(str) {
//   var obj = {};

//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();

//     if (/[a-z0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }
//   return obj;
// }

// // console.log(charCount("Hello World!"));

// // After Refactoring!

// const refactoredCharCount = (str) => {
//   let obj = {};

//   for (let char of str) {
//     const loweredChar = char.toLowerCase();

//     if (/[a-z0-9]/.test(loweredChar)) {
//       obj[loweredChar] = ++obj[loweredChar] || 1;
//     }
//   }
//   return obj;
// };
// console.log(refactoredCharCount("Almir Almir"));
