// Background of indexOf
// const isWantedValueInArray = (array, wantedValue) => {
//   for (let i = 0; i < array.length; i++) {
//     if (wantedValue === array[i]) return i;
//   }
//   return -1;
// };

// const isWantedValueInArray = (array, wantedValue) => {
//   const result = array.indexOf(wantedValue);
//   return result;
// };

// console.log(isWantedValueInArray([1, 2, 22, 3, 8, 72, 111, 6], 23));

// const binarySearch = (sortedArrayOfPositiveNumbers, wantedNumber) => {
//   let startPointer = 0;
//   let endPointer = sortedArrayOfPositiveNumbers.length - 1;
//   let middlePointer = Math.round((startPointer + endPointer) / 2);
//   while (sortedArrayOfPositiveNumbers[middlePointer] !== wantedNumber) {
//     if (sortedArrayOfPositiveNumbers[middlePointer] < wantedNumber) {
//       startPointer = middlePointer + 1;
//     }
//     if (sortedArrayOfPositiveNumbers[middlePointer] > wantedNumber) {
//       endPointer = middlePointer - 1;
//     }
//     middlePointer = Math.round(sortedArrayOfPositiveNumbers.length / 2);
//   }
//   return -1;
// };

// binarySearch([1, 5, 10, 11, 12, 14, 15, 17, 19, 20, 22, 23, 25, 37, 40], 11);

// function binarySearch(arr, elem) {
//   var start = 0;
//   var end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== elem && start <= end) {
//     if (elem < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }
//   if (arr[middle] === elem) {
//     return middle;
//   }
//   return -1;
// }

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(
  binarySearch([1, 5, 10, 11, 12, 14, 15, 17, 19, 20, 22, 23, 25, 37, 40], 14)
);
