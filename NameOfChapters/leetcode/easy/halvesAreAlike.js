const isVowel = (char) => {
    return char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U";
};

const halvesAreAlike = (s) => {
    let firstHalfCounter = 0;
    let secondHalfCounter = 0;

    for (let i = 0; i < s.length / 2; i++) {
        if (isVowel(s[i])) {
            firstHalfCounter++;
        }
    }

    for (let i = s.length / 2; i < s.length; i++) {
        if (isVowel(s[i])) {
            secondHalfCounter++;
        }
    }

    return firstHalfCounter === secondHalfCounter;
};


