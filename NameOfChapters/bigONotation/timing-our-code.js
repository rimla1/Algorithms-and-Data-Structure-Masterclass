function addUpToN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += 1;
  }
  return total;
}

function addUpToM(m) {
  return (m * (m + 1)) / 2;
}

console.log(addUpToN(5));
console.log(addUpToM(8));
