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

// function averagePair(arr, num) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     let avg = (arr[start] + arr[end]) / 2;
//     if (avg === num) return true;
//     else if (avg < num) start++;
//     else end--;
//   }
//   return false;
// }

// console.log(averagePair([1, 5, 22, 23, 27, 29], 3));

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
//In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// const isSubsequence = (string1, string2) => {
//   let indexOfLetter = [];
//   for (let i = 0; i < string1.length; i++) {
//     let num = string2.indexOf(string1[i]);
//     if (num == -1) {
//       return false;
//     }
//     let previousIndex = string2.indexOf(string1[i - 1]);
//     if (previousIndex > num) {
//       return false;
//     }
//     console.log(previousIndex, num);
//     indexOfLetter.push(num);
//   }
//   return true;
// };

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    console.log(str1[i], str2[j]);
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
//                         i          j
console.log(isSubsequence("almir", "OOaoomlgoir"));
