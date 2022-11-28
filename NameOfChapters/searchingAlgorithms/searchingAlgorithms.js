// Background of indexOf
const isWantedValueInArray = (array, wantedValue) => {
  for (let i = 0; i < array.length; i++) {
    if (wantedValue === array[i]) return i;
  }
  return -1;
};

// const isWantedValueInArray = (array, wantedValue) => {
//   const result = array.indexOf(wantedValue);
//   return result;
// };

console.log(isWantedValueInArray([1, 2, 22, 3, 8, 72, 111, 6], 23));

const binarySearch = (sortedArrayOfPositiveNumbers, wantedNumber) => {
  let startPointer = 0;
  let endPointer = sortedArrayOfPositiveNumbers.length - 1;
  let middlePointer = sortedArrayOfPositiveNumbers.length / 2;
  let roundedMiddlePointer = Math.round(middlePointer);
  while (startPointer < endPointer) {
    if (sortedArrayOfPositiveNumbers[roundedMiddlePointer] < wantedNumber) {
      startPointer = roundedMiddlePointer + 1;
    }
    if (sortedArrayOfPositiveNumbers[roundedMiddlePointer] > wantedNumber) {
      endPointer = roundedMiddlePointer - 1;
    }
    if (sortedArrayOfPositiveNumbers[roundedMiddlePointer] === wantedNumber) {
      return middlePointer;
    }
  }
  return -1;
};

binarySearch([1, 5, 10, 11, 12, 14, 15, 17, 19, 20, 22, 23, 25, 37, 40], 11);
