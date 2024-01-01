const isMonotonic = (nums) => {

    

    if(nums[0] <= nums[nums.length - 1]){
        for(let i = nums.length - 1; i > 0; i--){
            if(nums[i] < nums[i - 1] && nums[nums.length - 1] >= nums[i]) return false
        }
    }

    if(nums[0] > nums[nums.length - 1]){
        for(let i = nums.length - 1; i > 0; i--){
            if(nums[i] > nums[i - 1] && nums[nums.length - 1] <= nums[i]) return false
        }
    }

    return true
    
};