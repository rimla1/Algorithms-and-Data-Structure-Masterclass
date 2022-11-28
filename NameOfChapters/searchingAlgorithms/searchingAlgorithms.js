const isWantedValueInArray = (array, wantedValue) => {
  const result = array.indexOf(wantedValue);
  return result;
};

console.log(isWantedValueInArray([1, 2, 22, 3, 8, 72, 111, 6], 8));
