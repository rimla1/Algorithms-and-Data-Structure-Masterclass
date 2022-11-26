const reverse = (string) => {
  let reverseString = "";
  let staticValue = string.length;
  const recursiveFunc = (string) => {
    if (reverseString.length === staticValue) return;
    reverseString = reverseString.concat(string[string.length - 1]);
    let smallerString = string.slice(0, string.length - 1);
    recursiveFunc(smallerString);
  };
  recursiveFunc(string);
  return reverseString;
};

console.log(reverse("awesome"));
