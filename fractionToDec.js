var fractionToDecimal = function(numerator, denominator) {

    var string = '';

    string += numerator / denominator;

    if (string.match(/\./g)) {
      var repeating = false;
      if (denominator < 0) denominator = Math.abs(denominator);
      if (denominator >= Number.MAX_SAFE_INTEGER) denominator = Number.MAX_SAFE_INTEGER;


      for (var factor = 2; factor <= denominator; factor++) {
        if (denominator % factor === 0) {
          var prime = true
          for (var primer = 2; primer < factor; primer++) {
            if (factor !== 2 && factor % primer === 0) {
              prime = false;
              break;
            }
          }
          if (prime && factor !== 2 && factor !== 5) {
            repeating = true;
            break;
          }
        }
      }

      if (repeating) {
        var output = string.split('.')[0] + '.';
        var findRemainder = function(leftover, denom) { return leftover % denom * 10; };
        var remainder = findRemainder(numerator, denominator);
        var count = 0;
        var remainders = {remainder: count};
        var decimals = [];

        while (remainder) {


          if (remainders[remainder] >= 0) {

            var repeaters = '(' + decimals.splice(remainders[remainder], count).join('') + ')';

            output += decimals.join('') + repeaters;
            break;

          } else remainders[remainder] = count++;
          decimals.push(String(remainder / denominator)[0]);
          remainder = findRemainder(remainder, denominator);

        }

        return output;
    }


  }
  return string;

};





console.log(fractionToDecimal(1, 2147483648));

