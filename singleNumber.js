var singleNumber = function(nums) {
  var found = {};
  var unique = [];
  for (var i = 0; i < nums.length; i++) {
    found[nums[i]] = found[nums[i]] + 1 || 1;
  }

  for (var key in found) {
      if (found[key] === 1) {
          unique.push(Number(key));
      }
  }

  return unique;
};
