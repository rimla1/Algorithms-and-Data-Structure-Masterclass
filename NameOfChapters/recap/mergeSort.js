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

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, middle));

  let right = mergeSort(arr.slice(middle));


  return mergeSortedArrays(left, right);
};

mergeSort([5, 4, 9, 8, 12, 14, 19, 22, 16, 18]);
