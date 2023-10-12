const sumAllNumbersUpToN = (n) => {
    let sum = 0
    for(let i = 1; i < n + 1; i++){
        sum += i
    }
    console.log("Zbir svih brojeva je: ", sum)
    return sum
}

sumAllNumbersUpToN(5)