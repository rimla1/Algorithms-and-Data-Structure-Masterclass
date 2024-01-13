const sortArrayByParity = (nums) => {
    let result = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            result.push(nums[i])
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 !== 0){
            result.push(nums[i])
        }
    }
    return result
};