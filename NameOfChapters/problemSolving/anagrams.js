// Create a function that checks anagram of one string to another
const isAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  const frequencyCounterOfString1 = {};
  const frequencyCounterOfString2 = {};
  for (letter of str1) {
    frequencyCounterOfString1[letter] =
      (frequencyCounterOfString1[letter] || 0) + 1;
  }
  for (letter of str2) {
    frequencyCounterOfString2[letter] =
      (frequencyCounterOfString2[letter] || 0) + 1;
  }
  console.log(frequencyCounterOfString1);
  console.log(frequencyCounterOfString2);

  for (key in frequencyCounterOfString1) {
    console.log(key);
    if (frequencyCounterOfString2[key] !== frequencyCounterOfString1[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("rrimla", "Almirr"));
