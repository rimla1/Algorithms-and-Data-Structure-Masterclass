const binarySearch = (arrOfSortedNumbers, wantedNumber) => {
  let start = 0;
  let end = arrOfSortedNumbers.length;

  while (start < end) {
    let middle = Math.floor((start + end) / 2);

    if (arrOfSortedNumbers[middle] === wantedNumber) {
      return middle;
    }

    if (arrOfSortedNumbers[middle] < wantedNumber) {
      start = middle + 1;
    }
    if (arrOfSortedNumbers[middle] > wantedNumber) {
      end = middle;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 2));
