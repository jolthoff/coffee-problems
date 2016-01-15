var search = function(nums, target) {
  var found = -1
  nums.forEach(function(value, index) {
      if (value === target) {
        found = index;
      }
  })

    return found;

};

