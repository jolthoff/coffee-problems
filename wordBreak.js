var test = "cars";


var dict = ["car","ca","rs"];

// var wordBreak = function(s, wordDict) {
//   var newString = s;
//   for (var i = 0; i < wordDict.length; i++) {
//     var matcher = newString.match(wordDict[i]);
//     if (matcher) {
//       newString = newString.substring(0, matcher.index) +
//         newString.substring(matcher.index + matcher[0].length, newString.length);

//     }
//   }

//   return newString.length === 0 ? true : false;

// }

var wordBreak = function(s, wordDict) {
  if (!wordDict || wordDict.size === 0) return false;
  var newString = s;
    wordDict.forEach(function(word) {
      var matcher = newString.match(word);
      while(matcher) {
        newString = newString.substring(0, matcher.index) +
          newString.substring(matcher.index + matcher[0].length, newString.length);
        matcher = newString.match(word);
      }
    });


  return newString.length === 0 ? true : false;
};

console.log(wordBreak(test, dict));
