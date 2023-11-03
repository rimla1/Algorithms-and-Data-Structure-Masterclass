const averagePair = (arrayOfSortedNumber, targetAverage) => {
    if(arrayOfSortedNumber.length === 0){
        return false
    }
    
    let right = 0 
    let left = arrayOfSortedNumber.length - 1

    while(right < left){
        console.log(arrayOfSortedNumber[right],arrayOfSortedNumber[left])
        if((arrayOfSortedNumber[right] + arrayOfSortedNumber[left]) / 2 === targetAverage){
            return true
        }
        if((arrayOfSortedNumber[right] + arrayOfSortedNumber[left]) / 2 > targetAverage){
            right++
        }
        if((arrayOfSortedNumber[right] + arrayOfSortedNumber[left]) / 2 < targetAverage){
            return false
        }
    }
}

console.log(averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10))