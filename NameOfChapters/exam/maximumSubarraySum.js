const maxSubarraySum = (arrayOfNumbers, subarrayLength) => {

    if(subarrayLength > arrayOfNumbers.length){
        return false
    }

    let temp = 0
    let maxSum = 0
    for(let i = 0; i < subarrayLength; i++){
        maxSum += arrayOfNumbers[i]
    }
    temp = maxSum
    for(let j = subarrayLength; j < arrayOfNumbers.length; j++){
        temp = temp - arrayOfNumbers[j - subarrayLength] + arrayOfNumbers[j]
        maxSum = Math.max(maxSum, temp)
    }

    return maxSum

}


maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4], 4)