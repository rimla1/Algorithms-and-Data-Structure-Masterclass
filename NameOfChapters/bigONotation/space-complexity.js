// let total = 0         bigO: [O(1)]
// total += arr[i]       bigO: [O(1)]
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum([2, 7, 12, 22, 5]));
