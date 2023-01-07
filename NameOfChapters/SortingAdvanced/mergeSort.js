// Merge Function
const merge = (arr1, arr2) => {
  let sortedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    console.log(arr1[i], arr2[j]);
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

// merge([1, 5, 20, 700, 1000], [7, 14, 99, 100, 120]);

// Sort part
const mergeSort = (arr) => {
  if (arr.length <= 1) return;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  console.log(left, right);
  return;
};

mergeSort([22, 7, 13, 14, 100]);
