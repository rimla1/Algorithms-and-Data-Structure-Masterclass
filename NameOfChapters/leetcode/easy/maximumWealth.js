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

// I would set richest person to be 0, if it's only positive wealth, or -infinity if they own a bank
// calculate the next account and compare to current richest person
// return richest person