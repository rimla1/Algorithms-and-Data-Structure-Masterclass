const majorityElement = (nums) => {
    let lookup = {}
    for(let num of nums){
        lookup[num] = (lookup[num] || 0) + 1
    }
    for(let key in lookup){
        if(lookup[key] > nums.length / 2){
            return key
        }
    }
};

majorityElement([2,2,1,1,1,2,2])