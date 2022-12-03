// const merge = (arr1, arr2) => {
//   let mergedArray = [];
//   let j = 0;
//   let k = 0;
//   for (let i = 0; i < arr2.length * 2; i++) {
//     let m = i + j;
//     let n = i + k;
//     if (arr1[m] < arr2[n]) {
//       mergedArray.push(arr1[m]);
//       k--;
//     }
//     if (arr1[m] > arr2[n]) {
//       mergedArray.push(arr2[n]);
//       j--;
//     }
//   }

//   console.log(mergedArray);
//   return mergedArray;
// };
//

const merge = (arr1, arr2) => {
  let sortedArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }
  console.log(sortedArr);
  return sortedArr;
};

merge([1, 5, 20, 1000], [7, 14, 99, 100, 120]);

//
