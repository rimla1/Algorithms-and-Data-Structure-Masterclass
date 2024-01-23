const findErrorNums = (nums) => {
    let lookup = {}
    for(let i = 0; i < nums.length; i++){
        lookup[nums[i]] = (lookup[nums[i]] || 0) + 1
    }
    for(let key in lookup){
        if(lookup[key] > 1){
            if(lookup[key+1] === 0){
                return[key, key+1]
            } else {
                return[key, key-1]
            }
        }
    }
};

console.log(findErrorNums([1,2,3,4,4,6]))