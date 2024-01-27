const summaryRanges = (nums) => {
    let ans = []
    let j = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] + 1 !== nums[i + 1]){
            if(nums[j] === nums[i]){
                ans.push(`${nums[i]}`)
                j = i + 1
            } else {
                ans.push(nums[j] + "->" + nums[i])
                j = i + 1
            }

        }
    }
    return ans
};

summaryRanges([0,2,3,4,6,8,9])