const singleNumber = (nums) => {
    let results = {}

    for(let i = 0; i < nums.length; i++){
        results[nums[i]] = (results[nums[i]] || 0) + 1
    }

    for(let key in results){
        if(results[key] == 1){
            return key
        }
    }
};

singleNumber([1,1,2,2,4])