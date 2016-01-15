var containsNearbyDuplicate = function(nums, k) {
  var numbers = {};
  for (var i = 0; i < nums.length; i++) {
    if (Math.abs(numbers[nums[i]] - i) <= k) return true;
    numbers[nums[i]] = i;
  }

  return false;

};
