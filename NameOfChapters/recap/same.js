// const same = (arrOfNumbers, arrOfNumbersSquared) => {
//     if(arrOfNumbers.length !== arrOfNumbersSquared.length){
//         return false
//     }
//     for(let i = 0; i < arrOfNumbers.length; i++){
//         let correctIndex = arrOfNumbersSquared.indexOf(arrOfNumbers[i] ** 2)
//         if(correctIndex === -1){
//             return false
//         }
//         arrOfNumbersSquared.splice(correctIndex, 1)
//     }
//     return true
// }

const same = (array1, array2) => {
    if(array1.length !== array2.length){
        return false
    }

    const frequencyCounterOfArray1 = {}
    const frequencyCounterOfArray2 = {}

    for (const num1 of array1) {
        frequencyCounterOfArray1[num1] = (frequencyCounterOfArray1[num1] || 0) + 1
    }

    for (const num2 of array2) {
        frequencyCounterOfArray2[num2] = (frequencyCounterOfArray2[num2] || 0) + 1
    }

    console.log(frequencyCounterOfArray1)
    console.log(frequencyCounterOfArray2)
    for (const key in frequencyCounterOfArray1) {
        if(!(key ** 2 in frequencyCounterOfArray2)){
            return false
        }
        if(frequencyCounterOfArray2[key ** 2] !== frequencyCounterOfArray1[key]){
            return false
        }
    }
    return true
}


console.log(same([3, 3, 1, 5], [9, 1, 9, 25]))
// [3, 3, 1, 2]   ===> [9, 1, 4, 9]