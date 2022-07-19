// [Understand the Problem]
// Restate the question!
// we have two inputs(numbers) that goes into function
// we should return a sum of the two numbers
// I can determe a output based on input informations
// I should call inputs: number1 and number2, and the output should be called sum, function should be named sumOfTwoNumbers

// const sumOfTwoNumbers = (number1, number2) => {
//   return (sum = number1 + number2);
// };

// const result = sumOfTwoNumbers(5, 7);
// console.log(result);

// Simplified the problem

const charCount = (string) => {
  // Make object to return at end
  const countResult = {};

  // Loop over string, for each character...
  for (var i = 0; i < string.length; i++) {
    var char = string[i].toLowerCase();
    // If the char is a number/letter AND is a key in object, add one to count
    if (countResult[char] > 0) {
      countResult[char]++;
    }
    // If the char is a number/letter AND not in object, add it to object and set value to 1
    else {
      countResult[char] = 1;
    }
  }
  return countResult;
  // If character is something else (space, period, etc.) don't do anything
  // return object at the end
};

const consoleResult = charCount("Hello and Hi!");
console.log(consoleResult);
