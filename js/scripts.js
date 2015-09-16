var Player = function(mark) {
  this.mark = mark;
};

var Space = function(x, y) {
  this.xcoordinate = x;
  this.ycoordinate = y;
  this.gameArray = [];
  for (var i = 0; i < 3; i++) {
    this.gameArray.push(['-','-','-']);
  };
};

Space.prototype.markBy = function(player) {
  this.gameArray[this.xcoordinate][this.ycoordinate] = player.mark;
};


Space.prototype.markedBy = function() {
  return this.gameArray[this.xcoordinate][this.ycoordinate];
};
