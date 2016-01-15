var getHint = function(secret, guess) {
    var bullsAndCows = {'A': 0, 'B': 0};

    var secretMap = {};

    for (var i = 0; i < guess.length; i++ ) {
      if (!secretMap[secret[i]]) {
        secretMap[secret[i]] = [i];
      } else {
        secretMap[secret[i]].push(i);
      }
      if (guess[i] === secret[i]) {
        bullsAndCows['A']++;
      } else if (secretMap[guess[i]]) {
        bullsAndCows['B']++;
      }
    }

    return bullsAndCows['A'] + 'A' + bullsAndCows['B'] + 'B';

};


console.log(getHint("11", "10"));
