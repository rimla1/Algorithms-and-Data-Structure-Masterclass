// Merge Function
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

  return sortedArr;
};

// Sort part
const mergeSort = (arr) => {
  console.log("Ovo je trenutno array koji proveravamo: ", arr);
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  console.log(left, right);
  return merge(left, right);
};

mergeSort([22, 7, 13, 14, 100, 77, 18, 23, 99]);

// Expected Values
// Current Array: [22, 7, 13, 14, 100, 77, 18, 23, 99] -> [22, 7, 13, 14] -> [22, 7] -> [22] -> [7]

// Left: [22, 7, 13, 14] ==> [22, 7] ==> [22]
// Right: [100, 77, 18, 23, 99] ==> [13, 14] ==> [7]
