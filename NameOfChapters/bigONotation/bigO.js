// Always 3 operations    O(1)    [big O notation is constant]

function addUpToM(m) {
  return (m * (m + 1)) / 2;
}

// Have from 2n to 5n + 2 operations depends on input  O(n)  [It grows as n grows, runtime grows proparcionally]
// Number of operations is (eventually) bounded by a multiple of n (2n, 10n, 50n) O(2n) && O(10n) && O(100n) -> O(n)
function addUpToN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Here we have example of 2n, but it's still O(n)
function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}

countUpAndDown(10);
