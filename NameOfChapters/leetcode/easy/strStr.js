const strStr = (haystack, needle) => {
    if(needle.length === 0) return 0

    for(let i = 0; i < haystack.length; i++){
        for(let j = 0; j < needle.length; j++){
            if(haystack[i + j] !== needle[j]){
                break
            }
            if(j === needle.length - 1) return i
        }
    }

    return -1
};

