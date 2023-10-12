const sumAllNumbersUpToN = (n) => {
    let sum = 0
    for(let i = 1; i < n + 1; i++){
        sum += i
    }
    return sum
}

sumAllNumbersUpToN(5)

const sumAllNumbersUpToNInternetSolution = (n) => {
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += i
    }
    return sum
}

sumAllNumbersUpToNInternetSolution(3)

// Solution without loop [formula]:
const addUpTo = (n) => {
    return n * (n + 1) / 2;
}

let timeBeforeFunction = performance.now()
addUpTo(4)
let timeAfterFunction = performance.now()

console.log(`Time elapsed: ${(timeAfterFunction - timeBeforeFunction) / 1000} seconds`)

