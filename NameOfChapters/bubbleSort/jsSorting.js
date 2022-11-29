const arrayOfString = ["Adam", "Ben", "Daniella", "Cimon", "Eden", "Fabula"];
const arrayOfNumbers = [1, 8, 3, 100, 26, 2];

const stringSort = (arrayOfString) => {
  console.log(arrayOfString.sort());
  return arrayOfString.sort();
};

const numberSort = (arrayOfNumbers) => {
  console.log(arrayOfNumbers.sort());
  return arrayOfNumbers.sort();
};

stringSort(arrayOfString);
numberSort(arrayOfNumbers);
