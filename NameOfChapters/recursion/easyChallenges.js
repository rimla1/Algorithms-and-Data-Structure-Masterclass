// const power = (num1, num2) => {
//   // Used one instead of zero because any number multiple with one is the number itself
//   let powerOfTheBaseToTheExponent = 1;
//   const recursiveFunc = (base, exponent) => {
//     // Base Case (When to stop)
//     if (exponent === 0) {
//       return;
//     }
//     // Smaller input (To have impact)
//     powerOfTheBaseToTheExponent *= base;
//     exponent--;
//     recursiveFunc(base, exponent);
//   };
//   recursiveFunc(num1, num2);
//   return powerOfTheBaseToTheExponent;
// };

// console.log(power(2, 5));
// // result = 4        exponent = 2
// // result = 16       exponent = 1
// // result = 64       exponent = 0

// const factorial = (num) => {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// };

const factorial = (num) => {
  let valueToDecrease = num;
  let result = 1;
  for (let i = 0; i < num; i++) {
    result *= valueToDecrease;
    console.log(num);
    valueToDecrease--;
  }
  return result;
};

console.log(factorial(5));
