const isValid = (s) => {
    if(s.length % 2 !== 0) return false
    let openBracketStack = []
    let closeBracketStack = []
    for(let i = 0; i < s.length; i++){
        if(s[i] === "{" || s[i] === "(" || s[i] === "["){
            openBracketStack.push(s[i])
        } else {
            closeBracketStack.push(s[i])
        }
    }
    if(openBracketStack.length !== closeBracketStack.length) return false
    let j = 0
    console.log(openBracketStack)
    console.log(closeBracketStack)
    while(j < openBracketStack.length){
        console.log("Hi")
        if(openBracketStack[j] === "{" && closeBracketStack[j] !== "}") return false
        if(openBracketStack[j] === "[" && closeBracketStack[j] !== "]") return false
        if(openBracketStack[j] === "(" && closeBracketStack[j] !== ")") return false
        j++
    }

    return true
};

console.log(isValid("()[]{}"))