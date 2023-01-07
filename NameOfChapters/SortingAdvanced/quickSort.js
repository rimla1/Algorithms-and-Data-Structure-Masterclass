let arr = [22, 4, 5, 10, 17, 200]; // arr.length = 6

const pivot = (arr, startIndex, endIndex) => {
  let pivot = startIndex;
  console.log(pivot, startIndex, endIndex);
  for (let i = 0; i < endIndex; i++) {
    if (arr[startIndex] > arr[pivot + 1]) {
      pivot++;
    }
  }
  console.log(pivot);
  return pivot;
};

pivot(arr, 0, arr.length - 1);
