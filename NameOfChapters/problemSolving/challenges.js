// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// const sameFrequency = (positiveNumber1, positiveNumber2) => {
//   const strPositiveNumber1 = positiveNumber1.toString();
//   const strPositiveNumber2 = positiveNumber2.toString();
//   if (strPositiveNumber1.length !== strPositiveNumber2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let number of strPositiveNumber1) {
//     frequencyCounter1[number] = (frequencyCounter1[number] || 0) + 1;
//   }
//   for (let number of strPositiveNumber2) {
//     frequencyCounter2[number] = (frequencyCounter2[number] || 0) + 1;
//   }

//   for (let num of strPositiveNumber1) {
//     if (!(num in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter1[num] !== frequencyCounter2[num]) {
//       return false;
//     }
//   }
//   return true;
// };

// function sameFrequency(num1, num2) {
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if (strNum1.length !== strNum2.length) return false;

//   let countNum1 = {};
//   let countNum2 = {};

//   for (let i = 0; i < strNum1.length; i++) {
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
//   }

//   for (let j = 0; j < strNum1.length; j++) {
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
//   }

//   for (let key in countNum1) {
//     if (countNum1[key] !== countNum2[key]) return false;
//   }

//   return true;
// }

// console.log(sameFrequency(122345, 112345));

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
// const areThereDuplicates = (...args) => {
//   let frequency = {};
//   for (let num of args) {
//     frequency[num] = (frequency[num] || 0) + 1;
//     if (frequency[num] > 1) {
//       return false;
//     }
//   }

//   return true;
// };

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    console.log(key);
    console.log(collection[key]);
    if (collection[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(7, 66, 1, 5, 22, 3, 4, 66));
