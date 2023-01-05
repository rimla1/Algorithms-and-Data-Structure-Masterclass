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
    console.log("Ovde ulazi 2x da pokupi 700 i 1000");
    sortedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }

  return sortedArr;
};

merge([1, 5, 20, 700, 1000], [7, 14, 99, 100, 120]);

// i:0  j:0      sortedArr[1]
// i:1  j:0      sortedArr[1, 5]
// i:2  j:0      sortedArr[1, 5, 7]
// i:2  j:1      sortedArr[1, 5, 7, 14]
// i:2  j:2      sortedArr[1, 5, 7, 14, 20]
// i:3  j:2      sortedArr[1, 5, 7, 14, 20, 99]
// i:3  j:3      sortedArr[1, 5, 7, 14, 20, 99, 100]
// i:3  j:4      sortedArr[1, 5, 7, 14, 20, 99, 100, 120]
// i:3  j:4      sortedArr[1, 5, 7, 14, 20, 99, 100, 120]
// i:3  j:5      sortedArr[1, 5, 7, 14, 20, 99, 100, 120, undefined, 1000]
