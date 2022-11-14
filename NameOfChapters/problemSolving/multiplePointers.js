// Naive solution Time: O(n^2) Space: O(1)
function sumZero(arr) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //   console.log(arr[i], arr[j]);
      if (arr[i] + arr[j] === 0) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}

console.log(sumZero([-22, -4, -2, -1, 0, 1, 3, 4, 100]));
