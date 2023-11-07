const isPalindrome = (string) => {
    if (string.length === 0) return;
    if (string[0] !== string[string.length - 1]) {
      return false;
    }
    let smallerString = string.slice(1, string.length - 1);
    isPalindrome(smallerString);
    return true;
  };
  
console.log(isPalindrome("batab"))