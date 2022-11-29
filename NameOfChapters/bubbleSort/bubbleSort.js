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

// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// };

const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log("J iteracija zavrsena");
  }
  return arr;
};

console.log(bubbleSort([23, 1, 5, 22, 74, 40, 3, 5]));
