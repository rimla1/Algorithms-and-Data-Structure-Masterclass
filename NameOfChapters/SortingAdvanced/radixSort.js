const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let largestDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    largestDigit = Math.max(digitCount(nums[i]), largestDigit);
  }
  return largestDigit;
};

const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);

  return maxDigitCount;
};

radixSort([7, 4, 200, 22, 87, 1594, 9943]);
