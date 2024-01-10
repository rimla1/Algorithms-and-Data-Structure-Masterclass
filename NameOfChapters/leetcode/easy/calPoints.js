const calPoints = (operations) => {

    let array = []
    for(let i =0; i < operations.length; i++){
        if(operations[i] === "C") {
            array.pop()
        } else if (operations[i] === "+"){
            array.push(array[array.length - 1] + array[array.length - 2])
        } else if ((operations[i] === "D")){
            array.push(array[array.length - 1] * 2)
        } else {
            array.push(parseInt(operations[i]))
        }
    }
    

    let sum = 0;
    for(let j = 0; j < array.length; j++){
        sum = sum + array[j]
    }
    return sum
};

calPoints(["5","2","C","D","+"])
