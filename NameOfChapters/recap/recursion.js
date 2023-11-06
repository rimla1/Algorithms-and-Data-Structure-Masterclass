const countDown = (number) => {
    if(number <= 0){
        return
    }
    console.log(number)
    number--
    countDown(number)
}

// countDown(9)

const sumRange = (num) => {
    if(num === 1) return 1
    return num + sumRange(num - 1)
}

sumRange(9)