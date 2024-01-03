const kidsWithCandies = (candies, extraCandies) => {
    let kidWithMostCandies = 0
    for(let i = 0; i < candies.length; i++){
        if(candies[i] > kidWithMostCandies){
            kidWithMostCandies = candies[i]
        }
    }

    let result = []
    for(let i =0; i < candies.length; i++){
        if(candies[i] + extraCandies >= kidWithMostCandies){
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
};