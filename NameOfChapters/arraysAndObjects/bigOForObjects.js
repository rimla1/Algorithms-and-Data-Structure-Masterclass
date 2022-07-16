let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

const resultKeys = Object.keys(instructor);
const resultValues = Object.values(instructor);
const resultEntries = Object.entries(instructor);
const resultHasOwnProperty = Object.hasOwnProperty("firstName");

console.log(resultKeys);
console.log(resultValues);
console.log(resultEntries);
console.log(resultHasOwnProperty);
