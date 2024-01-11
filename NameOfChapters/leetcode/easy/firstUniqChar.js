const firstUniqChar = (s) => {

    let lookup = {};
    for(let i = 0; i < s.length; i++){
        lookup[s[i]] = (lookup[s[i]] || 0) + 1
    }
    let uniqueLetter;
    for(key in lookup){
        if(lookup[key] === 1) {
            uniqueLetter = key
            break
        }
    }
    return s.indexOf(uniqueLetter)
};

