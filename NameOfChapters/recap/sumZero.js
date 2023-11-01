const sumZero = (sortedArray) => {
    let left = 0
    let right = sortedArray.length - 1
    while(left < right){
        let sum = sortedArray[left] + sortedArray[right]
        if(sum > 0 ){
            right--
        }

        if(sum < 0 ){
            left++
        } 

        if(sum === 0 ){
            return true
        }

    }
    return undefined
}




sumZero([-7, -4, -3, -2, 0, 1, 5, 9, 12])