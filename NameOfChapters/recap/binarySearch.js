const binarySearch = (arrOfSortedNumbers, wantedNumber) => {
    let start = 0
    let end = arrOfSortedNumbers.length
    
    while(start < end){
        let middle = Math.floor((start + end)/2)
        console.log(arrOfSortedNumbers[middle])
        if(arrOfSortedNumbers[middle] === wantedNumber){
            return middle
        } 
        console.log("Ovo ne treba da se okine u ovom slucaju")
        if(arrOfSortedNumbers[middle] < wantedNumber){
            start = middle + 1
        }
        if(arrOfSortedNumbers[middle] > wantedNumber){
            end = middle 
        }
    }
    return -1

}


console.log(binarySearch([1,2,3,4,5],2))