var popBalloons = function(array) {
  var maxSum = 0;

  var recursor = function(anArray, index, runningSum) {

    var copy = anArray.slice();
    var left = copy[index - 1];
    var right = copy[index + 1];
    if (!left) left = 1;
    if (!right) right = 1;
    runningSum = runningSum + (copy.splice(index, 1) * left * right);
    if (copy.length === 0 && maxSum < runningSum) {
      maxSum = runningSum;
    } else {
      for ( var i = 0; i < copy.length; i++ ) recursor(copy, i, runningSum);
    }
  };


  for (var i = 0; i < array.length; i++) {
    recursor(array, i, 0);
  }

  return maxSum;
};

console.log(popBalloons([35,16,83,87,84,59,48,41,20,54]))
