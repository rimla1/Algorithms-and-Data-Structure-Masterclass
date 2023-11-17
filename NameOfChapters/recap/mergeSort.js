const mergeSortedArrays = (arr1, arr2) => {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
        mergedArray.push(arr2[j]);
      j++;
    }
    if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
};


mergeSortedArrays([3, 7, 9, 12, 50], [5, 10, 11, 30, 37, 45]);


