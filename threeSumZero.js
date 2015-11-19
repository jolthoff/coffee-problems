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

console.log(threeSumZero([12,-14,-5,12,-2,9,0,9,-3,-3,-14,-6,-4,13,-11,-8,0,5,-7,-6,-10,-13,-7,-14,-3,0,12,5,-8,7,3,-11,0,6,9,13,-8,-6,7,4,6,0,13,-13,-1,9,-13,6,-1,-13,-15,-4,-11,-15,-11,-7,1,-14,13,8,0,2,4,-15,-15,-2,5,-8,7,-11,11,-10,4,1,-15,10,-5,-13,2,1,11,-6,4,-15,-5,8,-7,3,1,-9,-4,-14,0,-15,8,0,-1,-2,7,13,2,-5,11,13,11,11]))
