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

class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }

  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }

    set(key, value){
        let index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])

    }

    get(key){
        let index = this._hash(key)
        if(!this.keyMap[index]){
            return undefined
        }
        if(this.keyMap[index].length === 1) return this.keyMap[index][0][1]
        if(this.keyMap[index].length > 1){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
            return undefined
        }
    }

    values(){
        let valuesArr = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }
        return valuesArr
    }

  }

const hashTable = new HashTable
hashTable.set("name", "Almir")
hashTable.set("aemn", "Rimla")
hashTable.set("surname", "Muminovic")
hashTable.set("age", "21")
console.log(hashTable.values())

