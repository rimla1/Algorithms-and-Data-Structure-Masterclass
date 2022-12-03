const merge = (arr1, arr2) => {
  let mergedArray = [];
  let j = 0;
  let k = 0;
  for (let i = 0; i < arr2.length * 2; i++) {
    let m = i + j;
    let n = i + k;
    if (arr1[m] < arr2[n]) {
      mergedArray.push(arr1[m]);
      k--;
    }
    if (arr1[m] > arr2[n]) {
      mergedArray.push(arr2[n]);
      j--;
    }
  }

  console.log(mergedArray);
  return mergedArray;
};
//
merge([1, 5, 20, 80], [7, 14, 99, 100, 120]);

//
