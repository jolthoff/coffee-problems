/*
Given a 2D board containing 'X' and 'O', capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

For example,
X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
*/


var testBoard = [
  ['X','X','X','X'],
  ['X','O','O','X'],
  ['X','O','O','X'],
  ['X','O','X','X']
    ];

var flipper = function(board) {

  var height = board.length;
  var width = board[0].length;

  var adjacencyChecker = function(yIndex, xIndex, from) {

    var current = { 'y': yIndex, 'x': xIndex },
      down = { 'y': yIndex + 1, 'x': xIndex },
      left = { 'y': yIndex, 'x': xIndex - 1},
      up = { 'y': yIndex - 1, 'x': xIndex},
      right = { 'y': yIndex, 'x': xIndex + 1};

    if (!from) from = [];
    from.push(current);


    var lookUp = true,
      lookLeft = true,
      lookRight = true,
      lookDown = true,
      checkUp = true,
      checkLeft = true,
      checkDown = true,
      checkRight = true;

    for (var i = 0; i < from.length; i++) {

      if (up.y === from[i].y && up.x === from[i].x) checkUp = false;
      if (left.y === from[i].y && left.x === from[i].x) checkLeft = false;
      if (right.y === from[i].y && right.x === from[i].x) checkRight = false;
      if (down.y === from[i].y && down.x === from[i].x) checkRight = false;

    }

    if (checkUp) {
      if (up.y < 0) {
        return false;
      } else if (up.y && board[up.y][up.x] === 'O') {
        lookUp = adjacencyChecker(up.y, up.x, from);
      }
    }
    if (checkLeft) {
      if (left.x < 0) {
        return false;
      } else if (board[left.y][left.x] === 'O') {
        lookLeft = adjacencyChecker(left.y, left.x, from);
      }
    }
    if (checkDown) {
      if (down.y >= height) {
        return false;
      } else if (board[down.y][down.x] === 'O') {
        lookDown = adjacencyChecker(down.y, down.x, from);
      }
    }
    if (checkRight) {
      if (right.x >= width) {
        return false;
      } else if (board[right.y][right.x] === 'O') {
        lookRight = adjacencyChecker(right.y, right.x, from);
      }
    }
    console.log('my current index is ', current.y, ',', current.x, ' and my lookup values are: ', lookUp, lookLeft, lookRight, lookDown)
    return lookUp && lookLeft && lookDown && lookRight ? true : false;

  };

  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      if (board[i][j] === 'O') {
        if (adjacencyChecker(i, j)) {
          board[i][j] = 'X';
        }
      }
    }
  }

  return board;

};
