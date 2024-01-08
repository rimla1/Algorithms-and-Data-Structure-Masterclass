const largestAltitude = (gain) => {
    let highest = 0
    let currentPosition = 0
    for(let i = 0; i < gain.length; i++){
        currentPosition = currentPosition + gain[i]
        highest = Math.max(highest, currentPosition)
    }


    return highest
};