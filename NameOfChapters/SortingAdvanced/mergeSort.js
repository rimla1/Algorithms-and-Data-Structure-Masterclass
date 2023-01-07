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
// Break array into halves untill

const breakArray = (arr) => {
  let arr1 = arr.slice(0, Math.round(arr.length / 2));
  let arr2 = arr.slice(Math.round(arr.length / 2), arr.length);

  const sortedArr = merge(arr1, arr2);
  console.log(sortedArr);
  return sortedArr;
};

breakArray([1, 22, 45, 70, 15, 100, 250]); // -> [1, 22, 45, 70] - [15, 100, 250]
