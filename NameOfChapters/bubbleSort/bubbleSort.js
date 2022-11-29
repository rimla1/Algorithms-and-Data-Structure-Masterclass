// How to swap in bubble algorithm
// const swap = (arr, idx1, idx2) => {
//   console.log("Pre swap-a: arr[idx1]", arr[idx1]);
//   console.log("Pre swap-a: arr[idx2]", arr[idx2]);
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   console.log("Posle swap-a: arr[idx1]", arr[idx1]);
//   console.log("Posle swap-a: arr[idx2]", arr[idx2]);
// };

// swap([1, 4, 8, 16, 32, 64, 70, 80], 2, 4);

//                 i   arr[arr.length - 1]
// [7, 20, 27, 18, 3]
//     j

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      console.log(arr);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

//                      i=0
bubbleSort([23, 1, 5, 22, 74, 40, 3, 5]);

// [1, 23, 5, 22, 74, 40, 3, 5] done
// [1, 5, 23, 22, 74, 40, 3, 5] done
// [1, 5, 22, 23, 74, 40, 3, 5] done
// [1, 5, 22, 23, 74, 40, 3, 5]
