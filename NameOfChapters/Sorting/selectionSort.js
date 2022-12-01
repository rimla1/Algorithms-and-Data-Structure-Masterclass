//   i
// [35, 100, 50, 2, 20]

// const insertionSort = (arr) => {
//   let sortedArr = [];
//   let smallestValue = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     console.log(`Compare currentSmallest: ${smallestValue} with ${arr[i]}`);
//     if (arr[i] < smallestValue) {
//       smallestValue = arr[i];
//     }
//   }
//   console.log(smallestValue);
//   return sortedArr;
// };

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if (i !== smallest) {
      console.log(i, smallest);
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  return arr;
};

console.log(insertionSort([34, 22, 10, 19, 17]));
