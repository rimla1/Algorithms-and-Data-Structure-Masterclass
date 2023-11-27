const swap = (arr, indx1, indx2) => {
  let temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
};

const findPivotIndex = (arr, start = 0, end = arr.length - 1) => {
  let indexOfPivot = start;
  let pivot = arr[start];

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      indexOfPivot++;
      swap(arr, indexOfPivot, i);
    }
  }

  swap(arr, indexOfPivot, start);
  return indexOfPivot;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = findPivotIndex(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr
};

console.log(quickSort([10, 2, 22, 3, 6, 1, 12, 19, 44, 7]));

// End result; [1,2,3,6,7,10,12,19,22,44]
