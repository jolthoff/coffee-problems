// Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note:
// Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
// The solution set must not contain duplicate quadruplets.
//     For example, given array S = {1 0 -1 0 -2 2}, and target = 0.

//     A solution set is:
//     (-1,  0, 0, 1)
//     (-2, -1, 1, 2)
//     (-2,  0, 0, 2)

//Iterative incomplete implementation
/*
var fourSum = function (array, target) {

  var currentSum,
      output = [],
      count,
      result,
      found,
      i, j, k, l, m, n;

  for (i = 0; i < array.length; i++) {
    currentSum = array[i];

    for (j = i + 1; j < array.length; j++) {
      currentSum += array[j];

      for (k = j + 1; k < array.length; k++) {
        currentSum += array[k];

        for (l = k + 1; l < array.length; l++) {
          currentSum += array[l];

          if (currentSum === target) {

            result = [array[i], array[j], array[k], array[l]].sort(function(a,b) {return a - b});
            found = false;

            for (m = 0; m < output.length; m++) {
              count = 0;

              for (n = 0; n < 4; n++) {
                if (result[n] = output[m][n]) count++;
                if (count === 4) {
                  found = true;
                  break;
                }
              }
            }
            if (!found) output.push(result);
          }
          currentSum -= array[l];
        }
        currentSum -= array[k];
      }
      currentSum -= array[j]
    }
  }

  return output;

}
*/

var fourSum = function(array, target) {

  if (!array || !target) return array;

  var output = [];
  var subRoutine = function(arrayToLookThrough, currentArrayResult) {

    var resultCopy = currentArrayResult.slice(),
        lookThroughCopy = arrayToLookThrough.slice();
    if (lookThroughCopy.length === 4) {

      if (lookThroughCopy.reduce(function(previous, current) {return previous + current}, 0) === target) {

        lookThroughCopy.sort(function(a,b) {return a - b});
        var found = false;
        for (var j = 0; j < output.length; j++) {
          var count = 0;
          for (var k = 0; k < lookThroughCopy.length; k++) {
            if (lookThroughCopy[k] === output[j][k]) count++;
            if (count === 4) {
              found = true;
              break;
            }

          }
          if (found) break;
        }
        if (!found) {
          output.push(lookThroughCopy);
          return;
        }

      }
      return;
    }

    for (var index = 0; index < arrayToLookThrough.length; index++) {

      var slicedCopy = arrayToLookThrough.slice(0, index).concat(arrayToLookThrough.slice(index + 1));
      resultCopy.push(arrayToLookThrough[index]);
      subRoutine(slicedCopy, resultCopy);
      resultCopy.pop();
    }

  };

  for (var i = 0; i < array.length; i++) {
    var slicedArray = array.slice(0,i).concat(array.slice(i + 1));

    subRoutine(slicedArray, [array[i]]);

  }



  return output;

}




console.log(fourSum([7,7,-1,-5,2,-2,8,-8,-10,0,1,-4,-1,4,-6,5,4]
, -21));
