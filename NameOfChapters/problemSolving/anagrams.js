// Create a function that checks anagram of one string to another
// const isAnagram = (string1, string2) => {
//   if (string1.length !== string2.length) {
//     return false;
//   }

//   const frequencyCounterOfString1 = {};
//   const frequencyCounterOfString2 = {};
//   for (letter of str1) {
//     frequencyCounterOfString1[letter] =
//       (frequencyCounterOfString1[letter] || 0) + 1;
//   }
//   for (letter of str2) {
//     frequencyCounterOfString2[letter] =
//       (frequencyCounterOfString2[letter] || 0) + 1;
//   }
//   console.log(frequencyCounterOfString1);
//   console.log(frequencyCounterOfString2);

//   for (key in frequencyCounterOfString1) {
//     console.log(key);
//     if (frequencyCounterOfString2[key] !== frequencyCounterOfString1[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isAnagram("rrimla", "Almirr"));

const validAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    console.log(lookup[letter]);
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};

validAnagram("rrimla", "almirr");
