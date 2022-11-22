// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

const averagePair = (arrayOfSortedNumber, targetAverage) => {
  for (let i = 0; i < arrayOfSortedNumber.length; i++) {
    matchedNumber = targetAverage * 2 - arrayOfSortedNumber[i];
    if (matchedNumber in arrayOfSortedNumber) {
      return true;
    }
  }
  return false;
};
i;
console.log(averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
