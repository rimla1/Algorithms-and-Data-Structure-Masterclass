//   i
// [35, 100, 50, 2, 20]

const insertionSort = (arr) => {
  let smallestValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    console.log(`Compare currentSmallest: ${smallestValue} with ${arr[i]}`);
    if (arr[i] < smallestValue) {
      smallestValue = arr[i];
    }
  }
  console.log(smallestValue);
  return arr;
};

console.log(insertionSort([35, 100, 50, 2, 20]));
