var Player = function(mark) {
  this.mark = mark;
};

var Space = function(x, y) {
  this.xcoordinate = x;
  this.ycoordinate = y;
};

var Board = function() {
  this.gameArray = [];
  for (var i = 0; i < 3; i++) {
    this.gameArray.push(['-','-','-']);
  };
};

Space.prototype.markBy = function(player, board) {
  board.gameArray[this.xcoordinate][this.ycoordinate] = player.mark;
};


Space.prototype.markedBy = function(board) {
  return board.gameArray[this.xcoordinate][this.ycoordinate];
};

Board.prototype.play = function(player) {
  if (this.gameArray[0][0] && this.gameArray[1][1] && this.gameArray[2][2]) {
    return "Win";
  } else if (this.gameArray[0][0] && this.gameArray[0][1] && this.gameArray[0][2]) {
    return "Win";
  } else if (this.gameArray[0][0] && this.gameArray[1][0] && this.gameArray[2][0]) {
    return "Win";
  } else if (this.gameArray[0][1] && this.gameArray[1][1] && this.gameArray[2][1]) {
    return "Win";
  } else if (this.gameArray[0][2] && this.gameArray[1][2] && this.gameArray[2][2]) {
    return "Win";
  } else if (this.gameArray[1][0] && this.gameArray[1][2] && this.gameArray[1][1]) {
    return "Win";
  } else if (this.gameArray[2][0] && this.gameArray[2][1] && this.gameArray[2][2]) {
    return "Win";
  } else if (this.gameArray[1][0] && this.gameArray[2][1] && this.gameArray[0][2]) {
    return "Win";
  } else if (this.gameArray[2][0] && this.gameArray[1][1] && this.gameArray[0][2]) {
    return "Win";
  } else {
    return false;
  }

};
