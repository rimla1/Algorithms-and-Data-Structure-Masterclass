const hash = (string, lengthOfArray) => {
    let hashedResult = 0
    for(let i = 0; i < string.length; i++){
        hashedResult += string[i].charCodeAt() - 96
    }

    let key = hashedResult % lengthOfArray
    return key
}

const hashOriginal = (key, arrayLength) => {
    let total = 0
    for (let char of key) {
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLength 
    }
    return total
}

const hashOriginalImproved = (key, arrayLength) => {
    let total = 0
    let WEIRD_PRIME = 31
    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLength
    }

    return total
}

hashOriginalImproved("pink", 13)
hashOriginalImproved("cyan", 13)

