// Given an array of n positive integers and a positive integer s,
// find the minimal length of a subarray of which the sum ≥ s.
// If there isn't one, return 0 instead.

// For example, given the array [2,3,1,2,4,3] and s = 7,
// the subarray [4,3] has the minimal length under the problem constraint.

var minSubArraySum = function(array, toSumTo) {

  var currentArray = [];
  var minimumArray = [];
  var currentSum = 0;

  for (var i = 0; i < array.length; i++) {
    currentArray = [];
    currentSum = 0;
    for (var j = i; j < array.length; j++) {
      currentArray.push(array[j]);
      currentSum += array[j];
      if (currentSum >= toSumTo) {
        if (minimumArray.length === 0 && currentArray.length !== 0) {
          minimumArray = currentArray;
        } else if (minimumArray.length > currentArray.length) {
          minimumArray = currentArray;
        }
        break;
      }
    }
  }

  return minimumArray;

};
