const maxSubarraySum = (arr, num) => {
  if (num > arr.length) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, -4, -9, -100], 3));
