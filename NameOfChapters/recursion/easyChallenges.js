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

// const factorial = (num) => {
//   let valueToDecrease = num;
//   let result = 1;
//   for (let i = 0; i < num; i++) {
//     result *= valueToDecrease;
//     console.log(num);
//     valueToDecrease--;
//   }
//   return result;
// };

// console.log(factorial(5));

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// const productOfArray = (arrayOfNumbers) => {
//   // Outer variable that won't reset to default everytime (in this case one)
//   let product = 1;

//   const recursiveFunc = (arrayOfNumbers) => {
//     // base case
//     if (arrayOfNumbers.length === 0) return;
//     product *= arrayOfNumbers[arrayOfNumbers.length - 1];
//     arrayOfNumbers.pop(arrayOfNumbers.length - 1);
//     console.log(arrayOfNumbers);
//     recursiveFunc(arrayOfNumbers);
//   };

//   recursiveFunc(arrayOfNumbers);
//   return product;
// };

// console.log(productOfArray([1, 2, 3, 4, 5, 6]));

// // Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
// const recursiveRange = (number) => {
//   let total = 0;

//   const recursiveFunc = (number) => {
//     if (number === 0) return;
//     total += number;
//     recursiveFunc(number - 1);
//   };

//   recursiveFunc(number);

//   return total;
// };

// console.log(recursiveRange(7));
// // number(7): number(num - 1) 6 + 5 + 4 + 6

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(13));
