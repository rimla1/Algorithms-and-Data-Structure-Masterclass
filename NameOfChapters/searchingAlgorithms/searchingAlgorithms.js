// Background of indexOf
const isWantedValueInArray = (array, wantedValue) => {
  for (let i = 0; i < array.length; i++) {
    if (wantedValue === array[i]) return i;
  }
  return -1;
};

// const isWantedValueInArray = (array, wantedValue) => {
//   const result = array.indexOf(wantedValue);
//   return result;
// };

console.log(isWantedValueInArray([1, 2, 22, 3, 8, 72, 111, 6], 23));
