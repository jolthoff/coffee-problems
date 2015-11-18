var threeSumZero = function (array) {

  var currentSum;
  var output = [];

  for (var i = 0; i < array.length; i++) {
    currentSum = array[i];
    for (var j = i + 1; j < array.length; j++) {
      currentSum += array[j];
      for (var k = j + 1; k < array.length; k++) {
        currentSum += array[k];
        if (currentSum === 0) {
          var result = [array[i], array[j], array[k]].sort(function(a, b) {return a - b});
          var found = false;
          for (var l = 0; l < output.length; l++) {
            var count = 0;
            for (var m = 0; m < 3; m++) {
              if (result[m] === output[l][m]) {
                count++;
              }
              if (count === 3) {
                found = true;
              }
            }
          }
          if (!found) {
            output.push(result);
          }
        }
        currentSum -= array[k];
      }
      currentSum -= array[j];
    }
  }

  return output;

};
