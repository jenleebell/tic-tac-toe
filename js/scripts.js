var Player = function(name, mark) {
  this.name = name
  this.mark = mark;
};

var Space = function(x, y) {
  this.xcoordinate = x;
  this.ycoordinate = y;
};

var Board = function() {
  this.gameArray = [];
  for(var i = 0; i < 3; i++)
  this.gameArray.push(['-','-','-']);
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

Board.prototype.markBy = function(x,y,player) {
  this.gameArray[x][y] = player.mark;
};

Board.prototype.play = function(player, gameBoard) {

  if ((gameBoard[0][0] && gameBoard[1][1] && gameBoard[2][2] === "X") || (gameBoard[0][0] && gameBoard[1][1] && gameBoard[2][2] === "O")) {
    return true;
  } else if ((gameBoard[0][0] === "X" && gameBoard[1][0] === "X" && gameBoard[2][0] === "X") || (gameBoard[0][0] === "O" && gameBoard[1][0] === "O" && gameBoard[2][0] === "O")) {
    return true;
  } else if ((gameBoard[0][1] === "X" && gameBoard[1][1] === "X" && gameBoard[2][1] === "X") || (gameBoard[0][1] === "O" && gameBoard[1][1] === "O" && gameBoard[2][1] === "O")) {
    return true;
  } else if ((gameBoard[0][2] === "X" && gameBoard[1][2] === "X" && gameBoard[2][2] === "X") || (gameBoard[0][2] === "O" && gameBoard[1][2] === "O" && gameBoard[2][2] === "O")) {
    return true;
  } else if ((gameBoard[0][0] === "X" && gameBoard[0][1] === "X" && gameBoard[0][2] === "X") || (gameBoard[0][0] === "O" && gameBoard[0][1] === "O" && gameBoard[0][2] === "O")) {
    return true;
  } else if ((gameBoard[1][0] === "X" && gameBoard[1][2] === "X" && gameBoard[1][1] === "X") || (gameBoard[1][0] === "O" && gameBoard[1][2] === "O" && gameBoard[1][1] === "O")) {
    return true;
  } else if ((gameBoard[2][0] === "X" && gameBoard[2][1] === "X" && gameBoard[2][2] === "X") || (gameBoard[2][0] === "O" && gameBoard[2][1] === "O" && gameBoard[2][2] === "O")) {
    return true;
  } else if ((gameBoard[0][0] === "X" && gameBoard[1][1] === "X" && gameBoard[2][2] === "X") || (gameBoard[0][0] === "O" && gameBoard[1][1] === "O" && gameBoard[2][2] === "O")) {
    return true;
  } else if ((gameBoard[0][2] === "X" && gameBoard[1][1] === "X" && gameBoard[2][0] === "X") || (gameBoard[0][2] === "O" && gameBoard[1][1] === "O" && gameBoard[2][0] === "O")) {
    return true;
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


  var turn = $("#zero-zero").click(function() {
    $("#zero-zero").empty().append(playa.mark);
    gameBoard.markBy(0,0,playa);
    blerg = gameBoard.play(playa, gameBoard.gameArray);
    $("#zero-zero").off();
    if (blerg === true) {
      $("h2#winner").show();
    }
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];



  });

  var turn = $("#zero-one").click(function() {
    gameBoard.markBy(0,1,playa);
    $("#zero-one").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
    $("#zero-one").off();
    if (gameBoard.play(playa, gameBoard.gameArray) == true) {
      $("h2#winner").show();
    }
  });

  var turn = $("#zero-two").click(function() {
    gameBoard.markBy(0,2,playa);
    $("#zero-two").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
    $("#zero-two").off();
    if (gameBoard.play(playa, gameBoard.gameArray) == true) {
      $("h2#winner").show();
    }

  });

  var turn = $("#one-zero").click(function() {
    gameBoard.markBy(1,0,playa);
    $("#one-zero").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
    $("#one-zero").off();
    if (gameBoard.play(playa, gameBoard.gameArray) == true) {
      $("h2#winner").show();
    }
  });

  var turn = $("#one-one").click(function() {
    gameBoard.markBy(1,1,playa);
    $("#one-one").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
    $("#one-one").off();
    if (gameBoard.play(playa, gameBoard.gameArray) == true) {
      $("h2#winner").show();
    }
  });

  var turn = $("#one-two").click(function() {
    gameBoard.markBy(1,2,playa);
    $("#one-two").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
    $("#one-two").off();
    if (gameBoard.play(playa, gameBoard.gameArray) == true) {
      $("h2#winner").show();
    }
  });

  var turn = $("#two-zero").click(function() {
    gameBoard.markBy(2,0,playa);
    $("#two-zero").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
    $("#two-zero").off();
    if (gameBoard.play(playa, gameBoard.gameArray) == true) {
      $("h2#winner").show();
    }
  });

  var turn = $("#two-two").click(function() {
    gameBoard.markBy(2,2,playa);
    $("#two-two").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
    $("#two-two").off();
    if (gameBoard.play(playa, gameBoard.gameArray) == true) {
      $("h2#winner").show();
    }
  });

  var turn = $("#two-one").click(function() {
    gameBoard.markBy(2,1,playa);
    $("#two-one").empty().append(playa.mark);
    turnArr = Turn(turn, playerX, playerO);
    turn = turnArr[0];
    playa = turnArr[1];
    $("#two-one").off();
    if (gameBoard.play(playa, gameBoard.gameArray) == true) {
      $("h2#winner").show();
    }
  });
});
