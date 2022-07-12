// Always 3 operations O(1) [big O notation is constant]

function addUpToM(m) {
  return (m * (m + 1)) / 2;
}

// Have from 2n to 5n + 2 operations depends on input [It grows as n grows, runtime grows proparcionally]
// Number of operations is (eventually) bounded by a multiple of n (2n, 10n, 50n)
function addUpToN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
