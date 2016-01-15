//Format of time string is hh:mm:ssXM where X is either A or P

function main (string) {

  if (string.match(/a/ig) && string.match(/12/g)) {
    var timeArr = string.split(':');
    timeArr[0] = Number(timeArr[0]) - 12 + '0';
    timeArr[2] = timeArr[2].replace('AM', '');
    string = timeArr.join(':');
  } else if (string.match(/p/ig) && string.match(/12/g)) {
    string = string.replace('PM', '');
  } else if (string.match(/p/ig)) {
    var timeArr = string.split(':');
    timeArr[0] = Number(timeArr[0]) + 12;
    timeArr[2] = timeArr[2].replace('PM', '');
    string = timeArr.join(':');
  } else if (string.match(/a/ig)) {
    string = string.replace('AM', '');
  }

  console.log(string);
}

console.log(main("12:45:54PM"));
