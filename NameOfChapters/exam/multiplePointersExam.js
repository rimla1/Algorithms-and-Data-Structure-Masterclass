// Challenge 1: Find Pair Sum - Given a sorted array of integers, find all pairs in the array that sum up to a specific target number.

const findPairSum = (arrayOfSortedNumbers, targetNumber) => {
    let start = 0
    let end = arrayOfSortedNumbers.length - 1
    let pairs = []
    while (start < end){
        if(( targetNumber - arrayOfSortedNumbers[start]) > arrayOfSortedNumbers[end]){
            start++
        }
        if(( targetNumber - arrayOfSortedNumbers[start]) < arrayOfSortedNumbers[end]){
            end--
        }
        if(( targetNumber - arrayOfSortedNumbers[start]) === arrayOfSortedNumbers[end]){
            pairs.push([arrayOfSortedNumbers[start], arrayOfSortedNumbers[end]]) 
            start++
            end--
        }
    }
    return pairs
}

findPairSum([1,2,3,4,5,6,7,8,9,10], 30)