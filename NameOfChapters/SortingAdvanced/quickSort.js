let arr = [22, 4, 5, 10, 17, 200]; // arr.length = 6

const pivot = (arr, startIndex, endIndex) => {
  let pivot = startIndex;
  for (let i = 0; i < endIndex; i++) {
    if (arr[startIndex] > arr[pivot + 1]) {
      pivot++;
    }
  }
  return pivot;
};

pivot(arr, 0, arr.length - 1);
