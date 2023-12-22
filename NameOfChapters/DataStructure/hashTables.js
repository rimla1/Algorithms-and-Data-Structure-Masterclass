const hash = (string, lengthOfArray) => {
    let hashedResult = 0
    for(let i = 0; i < string.length; i++){
        hashedResult += string[i].charCodeAt() - 96
    }

    let key = hashedResult % lengthOfArray
    console.log(key)
    return key
}

const hashh = (key, arrayLength) => {
    let total = 0
    for (let char of key) {
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLength 
    }
    console.log(total)
    return total
}

hash("pink", 11)

hashh("pink", 11)

