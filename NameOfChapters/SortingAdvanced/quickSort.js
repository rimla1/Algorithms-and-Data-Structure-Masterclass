let arr = [22, 4, 5, 10, 17, 200]; // arr.length = 6

// const pivot = (arr, startIndex, endIndex) => {
//   let pivot = startIndex;
//   for (let i = 0; i < endIndex; i++) {
//     if (arr[startIndex] > arr[pivot + 1]) {
//       pivot++;
//     }
//   }
//   return pivot;
// };

// pivot(arr, 0, arr.length - 1);

// Internet solution
const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);

  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

console.log(quickSort([7, 700, -250, -4, 4, 8, 2, 1, 5, 7, 6, 3]));
