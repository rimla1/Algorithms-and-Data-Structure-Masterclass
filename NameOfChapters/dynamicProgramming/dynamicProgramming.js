// O(2^n)
const fib = (n) => {
    if(n <= 2) return 1
    return fib(n - 1) + fib(n - 2)
}


const fibMemo = (n, memo=[]) => {
    if(memo[n] !== undefined) return memo[n]
    if(n <= 2) return 1
    let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo)
    memo[n] = res
    return res
}

