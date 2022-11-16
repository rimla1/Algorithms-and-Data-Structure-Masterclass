// Naive solution Time: O(n^2) Space: O(1)
// function sumZero(arr) {
//   const pairs = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       //   console.log(arr[i], arr[j]);
//       if (arr[i] + arr[j] === 0) {
//         pairs.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return pairs;
// }

// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// let t1 = performance.now();
// console.log(sumZero([-22, -4, -2, -1, 0, 1, 3, 4, 100]));
// let t2 = performance.now();

// console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds. `);

// const countUniqueValues = (arr) => {
//   const uniqueCounter = [];
//   for (let elementOfArray of arr) {
//     if (uniqueCounter.length === 0) {
//       uniqueCounter.push(elementOfArray);
//     }
//     if (elementOfArray !== uniqueCounter[uniqueCounter.length - 1]) {
//       uniqueCounter.push(elementOfArray);
//     }
//   }
//   return uniqueCounter.length;
// };

// console.log(
//   countUniqueValues([
//     "Amel",
//     "Amel",
//     "Amel",
//     "Benan",
//     "Benan",
//     "Bilal",
//     "Cristiano",
//     "Chris",
//   ])
// );

const countUniqueValues = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(
  countUniqueValues([
    1, 1, 1, 2, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 10,
  ])
);
