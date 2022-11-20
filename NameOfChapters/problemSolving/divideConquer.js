// function search(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

function search(array, val) {
  let min = 0; // 0
  let max = array.length - 1; // 5
  //    0  <=  5
  while (min <= max) {
    let middle = Math.floor((min + max) / 2); // 2
    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(search([1, 4, 16, 25, 49, 100], 100));
