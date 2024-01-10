const nextGreatestLetter = (letters, target) => {
    let charCodeOfTarget = target.charCodeAt()
    let i = 0
    while(i < letters.length){
        if(letters[i].charCodeAt() > charCodeOfTarget){
            break
        }
        i++
    }
    if(i === letters.length) return letters[0]
    return letters[i]
};



