// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// const averagePair = (arrayOfSortedNumber, targetAverage) => {
//   for (let i = 0; i < arrayOfSortedNumber.length; i++) {
//     matchedNumber = targetAverage * 2 - arrayOfSortedNumber[i];
//     if (matchedNumber in arrayOfSortedNumber) {
//       return true;
//     }
//   }
//   return false;
// };

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
//In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

const isSubsequence = (string1, string2) => {
  //   let i = 0;
  //   for (let j = 0; j < string2.length; j++) {
  //     console.log(string1[i], string2[j]);
  //   }
  let indexOfLetter = [];
  for (let i = 0; i < string1.length; i++) {
    let num = string2.indexOf(string1[i]);
    if (num == -1) {
      return false;
    }
    let previousIndex = string2.indexOf(string1[i - 1]);
    if (previousIndex > num) {
      return false;
    }
    console.log(previousIndex, num);
    indexOfLetter.push(num);
  }
  return true;
};

console.log(isSubsequence("aalmir", "OaOOlOOmOOiOOr"));
