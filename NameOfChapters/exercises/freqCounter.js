const hasDuplicates = (...nums) => {
  let frequencyCounter = {};
  for (let num of nums) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    if (frequencyCounter[num] > 1) return false;
  }
  return true;
};

console.log(hasDuplicates(1, 4, 8, 5, 6, 7, 8, 9));
