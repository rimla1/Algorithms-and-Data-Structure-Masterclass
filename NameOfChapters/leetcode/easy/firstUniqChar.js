const firstUniqChar = (s) => {
    let arr = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++ ) {
        let index = s.charCodeAt(i) - 97;
        arr[index]++;
    }

    for (let i = 0; i < s.length; i++ ) {
        let index = s.charCodeAt(i) - 97;
        if(arr[index] == 1) {
            return i;
        }
    }

    return -1;
};

firstUniqChar("almir")