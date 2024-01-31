const maxCoins = (piles) => {
    piles.sort((a,b) => {
        return a - b
    })
    let result = 0
    let counter = 0
    let i = piles.length - 2
    while(counter < piles.length / 3){
        result += piles[i]
        i -= 2
        counter++
    }
    return result 
};


maxCoins([2,2,4,1,7,8])