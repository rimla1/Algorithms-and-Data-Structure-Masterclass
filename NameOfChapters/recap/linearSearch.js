const linearSearch = (arrOFNumbers, wantedNumber) => {
    for(let i = 0; i < arrOFNumbers.length; i++){
        if(arrOFNumbers[i] === wantedNumber){
            return i
        }
    }
    return -1
}

linearSearch([1,2,3,4,5,6,7,8,9], 4)

const linearSearchRecursion = (arrOFNumbers, wantedNumber) => {
    if(arrOFNumbers.length < 1){
        return -1
    }
    if(arrOFNumbers[arrOFNumbers.length - 1] === wantedNumber){
        let index = arrOFNumbers.indexOf(arrOFNumbers[arrOFNumbers.length - 1])
        console.log(index)
        return index
    }
    arrOFNumbers.pop()
    linearSearch(arrOFNumbers, wantedNumber)
}

// linearSearchRecursion([1,2,3,4,5,6,7,8,9], 4)