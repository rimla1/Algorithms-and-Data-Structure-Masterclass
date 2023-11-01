const countUniqueValues = (sortedArray) => {
    let count = {}

    for(let i = 0; i < sortedArray.length; i++){
        let number = sortedArray[i]
        count[number] = (count[number] || 0) + 1
    }

    let arr = Object.keys(count).length


    return arr
}

countUniqueValues([1, 1, 1, 2, 3, 4, 4, 4, 5, 7])