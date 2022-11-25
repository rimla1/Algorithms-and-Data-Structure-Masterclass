// const addUpToR = (r) => {
//   let total = 0;
//   for (let i = 0; i <= r; i++) {
//     total += i;
//   }
//   return total;
// };

// let t1 = performance.now();
// addUpToR(10000000);
// let t2 = performance.now();

// console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds. `);

// const addUpToP = (r) => {
//   let total = (r * (r + 1)) / 2;
//   return total;
// };

// let t3 = performance.now();
// addUpToP(10000000);
// let t4 = performance.now();

// console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds. `);

function subtotals(array) {
  var subtotalArray = Array(array.length);
  console.log(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

console.log(subtotals([10, 20, 30]));

// i = 0
// i = 1
// i = 2
