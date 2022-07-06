// It has 5n + 2 operations [Depends on number that function received]
function addUpToN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// It has 3 operations [Does not depends on number that function received]
function addUpToM(m) {
  return (m * (m + 1)) / 2;
}

let t1 = performance.now();
addUpToN(1000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

let t3 = performance.now();
addUpToM(10000000);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`);
