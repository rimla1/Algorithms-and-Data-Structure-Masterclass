// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
const sameFrequency = (positiveNumber1, positiveNumber2) => {
  const strPositiveNumber1 = positiveNumber1.toString();
  const strPositiveNumber2 = positiveNumber2.toString();
  if (strPositiveNumber1.length !== strPositiveNumber2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let number of strPositiveNumber1) {
    frequencyCounter1[number] = (frequencyCounter1[number] || 0) + 1;
  }
  for (let number of strPositiveNumber2) {
    frequencyCounter2[number] = (frequencyCounter2[number] || 0) + 1;
  }

  for (let num of strPositiveNumber1) {
    if (!(num in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[num] !== frequencyCounter2[num]) {
      return false;
    }
  }
  return true;
};

// console.log(sameFrequency(44472, 24447));

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
const areThereDuplicates = (...args) => {
  let frequency = {};
  for (let num of args) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > 1) {
      return false;
    }
  }

  return true;
};

console.log(areThereDuplicates(7, 1, 5, 22, 3, 4, 66));
