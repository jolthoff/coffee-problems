var twoSum = function(nums, target) {
    var currentSum = 0;
    var index1;
    var index2;

    for (var i = 0; i < nums.length; i++) {
        currentSum = nums[i];
        index1 = i;
        for (var j = i + 1; j < nums.length; j++) {
            index2 = j;
            currentSum += nums[j];
            if (currentSum === target) {
                return index1 > index2 ? [index2 + 1, index1 + 1] : [index1 + 1, index2 + 1];
            }
            currentSum -= nums[j];
        }
    }
};

console.log(twoSum([2,1,2,3], 5));
