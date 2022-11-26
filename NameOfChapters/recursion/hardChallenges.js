// const reverse = (string) => {
//   let reverseString = "";
//   let staticValue = string.length;
//   const recursiveFunc = (string) => {
//     if (reverseString.length === staticValue) return;
//     reverseString = reverseString.concat(string[string.length - 1]);
//     let smallerString = string.slice(0, string.length - 1);
//     recursiveFunc(smallerString);
//   };
//   recursiveFunc(string);
//   return reverseString;
// };

// console.log(reverse("awesome"));

// const isPalindrome = (string) => {
//   if (string.length === 0) return;
//   if (string[0] !== string[string.length - 1]) {
//     return false;
//   }
//   let smallerString = string.slice(1, string.length - 1);
//   isPalindrome(smallerString);
//   return true;
// };

// console.log(isPalindrome("anna"));

// isOdd
// const someRecursive = (arr) => {
//   if (arr.length === 0) {
//     return;
//   }
//   if (arr[arr.length - 1] % 2 !== 0) {
//     return true;
//   }
//   arr.pop(arr.length - 1);
//   someRecursive(arr);
//   return false;
// };

// console.log(someRecursive([2, 4, 6, 8]));
// [2, 4, 6, 8] -> 4
// [2, 4, 6]  -> 3
// [2, 4]   -> 2
// [2]   -> 1
// []  -> 0

// function flatten(oldArr){
//     var newArr = []
//         for(var i = 0; i < oldArr.length; i++){
//           if(Array.isArray(oldArr[i])){
//                 newArr = newArr.concat(flatten(oldArr[i]))
//           } else {
//                 newArr.push(oldArr[i])
//           }
//     }
//     return newArr;
//   }

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

console.log(capitalizeWords(["rimla", "ammce", "edo"]));

// ["rimla", "ammce", "edo"] -> arr[0][0]
