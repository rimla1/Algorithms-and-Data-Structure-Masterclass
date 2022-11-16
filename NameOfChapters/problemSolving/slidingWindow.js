const maxSubarraySum = (arr) => {
  // make a variable that stores max sub of two digits
  let maxSum = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 1; j < arr.length; j++) {
      if (maxSum.length === 0) {
        maxSum.push(arr[i] + arr[j]);
      }
      if (maxSum[0] < arr[i] + arr[j]) {
        maxSum[0] = arr[i] + arr[j];
      }
    }
  }
  return maxSum;
};

console.log(maxSubarraySum([6, 7, 8, 2, 1, 2, 3, 4, 5, 6, 9]));
