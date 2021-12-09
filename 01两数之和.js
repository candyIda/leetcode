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
console.log(Math.pow(10, 2))

// foreach不能像for循环通过break continue 这样跳出