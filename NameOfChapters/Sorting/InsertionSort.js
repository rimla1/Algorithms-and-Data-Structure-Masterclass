// const insertionSort = (arr) => {
//   console.log(`Unsorted Array: ${arr}`);
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] > arr[i]) {
//       let temp = arr[i - 1];
//       arr[i - 1] = arr[i];
//       arr[i] = temp;
//     }
//   }
//   console.log(`Sorted Array: ${arr}`);
//   return arr;
// };

const insertionSort = (arr) => {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    console.log(`Current value for iteration${i} is: ${arr[i]}`);
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
};

insertionSort([20, 3, 17, 40, 36, 2]);
// [3, 20, 17, 40, 36, 2]

// i[1] = 3    j[0] = 20  if(arr[j]: 20 > 3)
