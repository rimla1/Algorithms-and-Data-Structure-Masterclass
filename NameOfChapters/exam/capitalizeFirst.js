const outer = (arrStringsWithLowerCapitalLetter) => {
    const arrStringsWithUpperCapitalLetter = []

    const transformFirstLetterIntoUpper = (arrStringsWithLowerCapitalLetter) => {
        if(arrStringsWithLowerCapitalLetter.length === 0) return arrStringsWithUpperCapitalLetter
        arrStringsWithUpperCapitalLetter.push(arrStringsWithLowerCapitalLetter[arrStringsWithLowerCapitalLetter.length - 1][0].toUpperCase() + arrStringsWithLowerCapitalLetter[arrStringsWithLowerCapitalLetter.length - 1].slice(1, arrStringsWithLowerCapitalLetter[0].length))
        arrStringsWithLowerCapitalLetter.pop()
        transformFirstLetterIntoUpper(arrStringsWithLowerCapitalLetter)
    }

    transformFirstLetterIntoUpper(arrStringsWithLowerCapitalLetter)

    console.log(arrStringsWithUpperCapitalLetter)
    return arrStringsWithUpperCapitalLetter

}

// outer(["almir", "john", "adam"])

const capitalizeWords = (array) => {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }

capitalizeWords(["almir", "john", "adam", "nicole"])

