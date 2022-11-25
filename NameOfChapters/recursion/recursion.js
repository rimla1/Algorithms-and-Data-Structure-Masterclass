// Recursive Version
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
// countDown(3);

// Iterative Version
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(sumRange(4));

// const factorial = (n) => {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result = result * (n - i);
//   }
//   return result;
// };

// const factorial = (n) => {
//   let result = 1;
//   for (let i = n; i > 0; i--) {
//     result *= i;
//   }
//   return result;
// };

const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(6));
