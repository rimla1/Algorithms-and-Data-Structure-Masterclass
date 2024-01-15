const finalValueAfterOperations = (operations) => {
    let counter = 0
    for(let i = 0; i < operations.length; i++){
        if(operations[i][1] === "-") counter--
        else counter++
    }
    return counter
};