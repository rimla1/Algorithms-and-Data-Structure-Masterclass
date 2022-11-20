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

console.log(sameFrequency(44472, 24447));

// Test 1: Length of the number [Passed]
// Test 2: Existence of single number to secondNumber [Passed]
// Test 3: Number of occurence of specific number [Passed]
// Test
