var twoSum = function(nums, target) {
    let map = new Map();
    let len = nums.length;
    for (i = 0; i < len; i++){
        let count = target - nums[i];
        if(map.has(count)){
            return [map.get(count), i];
        } else{
            map.set(nums[i], i);
        }
    }
    return [];
};
console.log(twoSum([2,4,11,3],6))

// foreach不能像for循环通过break continue 这样跳出