const maxProfit = (prices) => {
    let buyDay = 0
    let sellDay = 1
    let profit = 0
    while(sellDay < prices.length){
        profit = Math.max(prices[sellDay] - prices[buyDay], profit)
        if(prices[buyDay] > prices[sellDay]){
            buyDay = sellDay
        }
        sellDay++
    }
    return profit
};