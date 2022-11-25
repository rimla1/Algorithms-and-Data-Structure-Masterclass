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

// const factorial = (n) => {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// };

// console.log(factorial(6));

// function collectOddValues(arr) {
//   let result = [];

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return;
//     }

//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }
//     helper(helperInput.slice(1));
//   }

//   helper(arr);

//   return result;
// }

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 5, 55, 100]));

// [1].concat(collectOddValues([2, 5, 55, 100]))
//      [].concat(collectOddValues([5, 55, 100]))
//          [5].concat(collectOddValues([55, 100]))
//              [55].concat(collectOddValues([100]))
//                  [].concat(collectOddValues([]))
