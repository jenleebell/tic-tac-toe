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

var Turn = function(tern, player1, player2) {
  if (tern === 0) {
    var playa = player1;
    tern = 1;
    var turnArray = [tern, playa]
    return turnArray;
  } else {
    playa = player2;
    tern = 0;
    turnArray = [tern, playa]
    return turnArray;
  }
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

$(document).ready(function() {
  var playerX = new Player("X");
  var playerO = new Player("O");
  var turnArr = new Turn(0, playerX, playerO);
  var playa = turnArr[1];
  var turn = turnArr[0];
  var gameBoard = new Board();


  var turn = $("td#zero-zero").click(function() {
    space00 = new Space(0,0);
    space00.markBy(playa, gameBoard);
    $("td#zero-zero").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
  });

  var turn = $("#zero-one").click(function() {
    space01 = new Space(0,1);
    space01.markBy(playa, gameBoard);
    $("td#zero-one").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
  });

  var turn = $("#zero-two").click(function() {
    space02 = new Space(0,2);
    space02.markBy(playa, gameBoard);
    $("td#zero-two").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
  });

  var turn = $("#one-zero").click(function() {
    space10 = new Space(1,0);
    space10.markBy(playa, gameBoard);
    $("td#one-zero").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
  });

  var turn = $("#one-one").click(function() {
    space11 = new Space(1,1);
    space11.markBy(playa, gameBoard);
    $("td#one-one").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
  });

  var turn = $("#one-two").click(function() {
    space12 = new Space(1,2);
    space12.markBy(playa, gameBoard);
    $("td#one-two").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
  });

  var turn = $("#two-zero").click(function() {
    space20 = new Space(2,0);
    space20.markBy(playa, gameBoard);
    $("td#two-zero").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
  });

  var turn = $("#two-two").click(function() {
    space22 = new Space(2,2);
    space22.markBy(playa, gameBoard);
    $("td#two-two").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
  });

  var turn = $("#two-one").click(function() {
    space21 = new Space(2,1);
    space21.markBy(playa, gameBoard);
    $("td#two-one").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
  });
});
