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

// sumRange(9)

const factorial = (num) => {
    if(num === 1) return 1
    return num * factorial(num - 1)
}

// factorial(4)

const collectOddValues = (nums) => {
    const result = []



    const findOddNumber = (arrOfNumbers) => {
        if(arrOfNumbers.length === 0){
            return result
        }
        if(nums[arrOfNumbers.length - 1] % 2){
            result.push(nums[arrOfNumbers.length - 1])
        }
        arrOfNumbers.pop()
        findOddNumber(arrOfNumbers)
    }

    findOddNumber(nums)

    return result
}

collectOddValues([1,2,3,4,5,6,7,8,9,10,11,12,13])