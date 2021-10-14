var twoSum = function(nums, target) {
    const myArr = nums
    let results
    myArr.forEach((element, index) => {
        const myValue = target - element;
        if (nums.indexOf(myValue) != -1){
            const otherIndex = nums.indexOf(myValue)
            results = [index, otherIndex]
        }
    });
    return results
};