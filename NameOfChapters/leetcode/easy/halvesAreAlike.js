const halvesAreAlike = (s) => {
    let firstHalfCounter = 0
    let secondHalfCounter = 0
    for(let i = 0; i < s.length / 2; i ++){
        if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u" || s[i] === "A" || s[i] === "E" || s[i] === "I" || s[i] === "O" || s[i] === "U"){
            firstHalfCounter++
        }
    }
    for(let i = s.length / 2; i < s.length; i ++){
        if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u" || s[i] === "A" || s[i] === "E" || s[i] === "I" || s[i] === "O" || s[i] === "U"){
            secondHalfCounter++
        }
    }
    return firstHalfCounter === secondHalfCounter
};

