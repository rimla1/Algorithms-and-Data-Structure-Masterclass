const maximumWealth = (accounts) => {
    let richest = 0
    for(let i = 0; i < accounts.length; i++){
        let wealthOfAccount = 0
        for(let j = 0; j < accounts[i].length; j++){
            wealthOfAccount = wealthOfAccount + accounts[i][j]
        }
        richest = Math.max(richest, wealthOfAccount)
    }
    return richest
};

maximumWealth([[2,8,7],[7,1,3],[1,9,5]])