// O(n)
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// logAtLeast5(3);

// O(5) -> O(1) [constant]
function logMax5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logMax5(100);
