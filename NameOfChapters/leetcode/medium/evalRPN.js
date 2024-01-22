const evalRPN = (tokens) => {
    let numsStack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "/") {
            let topInStack = numsStack.pop();
            let secondToTopInStack = numsStack.pop();
            numsStack.push(Math.trunc(secondToTopInStack / topInStack));
        } else if (tokens[i] === "*") {
            let result = numsStack.pop() * numsStack.pop();
            numsStack.push(result);
        } else if (tokens[i] === "+") {
            let result = numsStack.pop() + numsStack.pop();
            numsStack.push(result);
        } else if (tokens[i] === "-") {
            let topInStack = numsStack.pop();
            let secondToTopInStack = numsStack.pop();
            numsStack.push(secondToTopInStack - topInStack);
        } else {
            numsStack.push(parseInt(tokens[i]));
        }
    }
    return numsStack[0];
};