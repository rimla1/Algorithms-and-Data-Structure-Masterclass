const maxSubarraySum = (arrayOfNumbers, n) => {
    if(arrayOfNumbers.length < n || arrayOfNumbers.length === 0){
        return null
    }

    let temp = 0
    let maxSum = 0

    for(let i = 0; i < n; i++){
        maxSum += arrayOfNumbers[i]
    }
    temp = maxSum
    for(let i = n; i < arrayOfNumbers.length; i++){
        temp = temp - arrayOfNumbers[i - n] + arrayOfNumbers[i]
        maxSum = Math.max(maxSum, temp)
    }
    
    console.log(maxSum)
    return maxSum
}

maxSubarraySum([1,4,3,2,4,6,8,4,1,9], 3)