const countUniqueValues1 = (sortedArray) => {
    if(sortedArray.length === 0){
        return 0
    }

    let i = 0
    for(let j = 1; j < sortedArray.length; j++){
        if(sortedArray[i] !== sortedArray[j]){
            i++
            sortedArray[i] = sortedArray[j]
        }
    }

    return i + 1
}



console.log(countUniqueValues1([1,1,2,2,2,2,3,4,4,4,4,4,4,4,4]))