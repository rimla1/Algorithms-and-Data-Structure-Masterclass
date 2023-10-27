const same = (arrOfNumbers, arrOfNumbersSquared) => {
    if(arrOfNumbers.length !== arrOfNumbersSquared.length){
        return false
    }
    for(let i = 0; i < arrOfNumbers.length; i++){
        let correctIndex = arrOfNumbersSquared.indexOf(arrOfNumbers[i] ** 2)
        if(correctIndex === -1){
            return false
        }
        arrOfNumbersSquared.splice(correctIndex, 1)
    }
    return true
}

console.log(same([3, 3, 1, 5], [9, 1, 9, 25]))
// [3, 3, 1, 2]   ===> [9, 1, 4, 9]