const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const radixSort = (arr) => {
  let largestDigit = 0;
  for (let i = 0; i < arr.length; i++) {
    largestDigit = Math.max(digitCount(arr[i]), largestDigit);
  }
  console.log(largestDigit);
  return largestDigit;
};

radixSort([7, 4, 200, 22, 87, 1594, 9943]);
