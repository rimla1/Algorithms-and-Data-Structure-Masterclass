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

// findPairSum([1,2,3,4,5,6,7,8,9,10], 30)

// Challenge 2: Count Unique Values: Write a function that counts the number of unique values in a sorted array.

const countUniqueValues = (arrayOfSortedNumbers) => {
    if(arrayOfSortedNumbers.length === 0){
        return 0
    }

    let start = 0;
    for(let i = 1; i < arrayOfSortedNumbers.length; i++){
        if(arrayOfSortedNumbers[start] !== arrayOfSortedNumbers[i]){
            start++
            arrayOfSortedNumbers[start] = arrayOfSortedNumbers[i]
        }
    }
    console.log("Ovo je resenje!", start)
    return start
}

// countUniqueValues([1,2,2,2,2,2,3,4,4,4,4,4,4,4,4])


// Challenge 3: Are There Duplicates: Write a function that checks if there are any duplicates in an unsorted array.

const areThereDuplicates = (unsortedArray) => {
    if(unsortedArray.length === 0){
        return false
    }

    let lookup = {}

    for(let i = 0; i < unsortedArray.length; i++){
        lookup[unsortedArray[i]] = (lookup[unsortedArray[i]] || 0) + 1
    }

    for(let key in lookup){
        if(lookup[key] > 1){
            return true
        }
    }

    return false
}

areThereDuplicates([1,2,3,'a'])