const insertionSort = (arr) => {
  console.log(`Unsorted Array: ${arr}`);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      let temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
    }
  }
  console.log(`Sorted Array: ${arr}`);
  return arr;
};
//                        i-1    i
console.log(insertionSort([20, 3, 17, 40, 36]));

// [3, 20, 17, 40, 36]
// [3, 17, 20, 40, 36]
// [3, 17, 20, 40, 36]
// [3, 17, 20, 36, 40]
