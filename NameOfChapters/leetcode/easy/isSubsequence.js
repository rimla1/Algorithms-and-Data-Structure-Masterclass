const isSubsequence = (s, t) => {
    if(s.length > t.length) return false

    let sPointer = 0
    let tPointer = 0

    while(sPointer < s.length && tPointer < t.length){
        if(s[sPointer] === t[tPointer]){
            sPointer++
            tPointer++
        } else {
            tPointer++
        }
    }    
    if(sPointer === s.length) return true
    return false

};

isSubsequence("axc", "ahbgdc")