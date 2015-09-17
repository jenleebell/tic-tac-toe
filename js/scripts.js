var Player = function(name, mark) {
  this.name = name
  this.mark = mark;
};

var Space = function(x, y) {
  this.xcoordinate = x;
  this.ycoordinate = y;
};

var Board = function(player1, player2) {
  this.gameArray = [];
  for(var i = 0; i < 3; i++)
  this.gameArray.push(['-','-','-']);
  this.player1 = player1
  this.player2 = player2
  this.turn = player1
};

// var Turn = function(tern, player1, player2) {
//   if (tern === 0) {
//     var playa = player1;
//     tern = 1;
//     var turnArray = [tern, playa]
//     return turnArray;
//   } else {
//     playa = player2;
//     tern = 0;
//     turnArray = [tern, playa]
//     return turnArray;
//   }
// };

Board.prototype.changeTurn = function() {
  if (this.turn === this.player1) {
    this.turn = this.player2;
  } else {
    this.turn = this.player1;
  }
}

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

  if (gameBoard[0][0] && gameBoard[1][1] && gameBoard[2][2] === player.mark) {
    return true;
  } else if (gameBoard[0][0] === player.mark && gameBoard[1][0] === player.mark && gameBoard[2][0] === player.mark) {
    return true;
  } else if (gameBoard[0][1] === player.mark && gameBoard[1][1] === player.mark && gameBoard[2][1] === player.mark) {
    return true;
  } else if (gameBoard[0][2] === player.mark && gameBoard[1][2] === player.mark && gameBoard[2][2] === player.mark) {
    return true;
  } else if (gameBoard[0][0] === player.mark && gameBoard[0][1] === player.mark && gameBoard[0][2] === player.mark) {
    return true;
  } else if (gameBoard[1][0] === player.mark && gameBoard[1][2] === player.mark && gameBoard[1][1] === player.mark) {
    return true;
  } else if (gameBoard[2][0] === player.mark && gameBoard[2][1] === player.mark && gameBoard[2][2] === player.mark) {
    return true;
  } else if (gameBoard[0][0] === player.mark && gameBoard[1][1] === player.mark && gameBoard[2][2] === player.mark) {
    return true;
  } else if (gameBoard[0][2] === player.mark && gameBoard[1][1] === player.mark && gameBoard[2][0] === player.mark) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  var playerX = new Player(null, null);
  var playerO = new Player(null, null);
  var gameBoard = new Board(playerX, playerO);
  var playa = gameBoard.turn;

  $("form#playerO-piece").hide();
  $("#game").hide();
  $("#click-to-play").hide()
  $("#player-turn").hide();

  $("form#playerX-piece").submit(function(event){
    event.preventDefault()

    var playerXName = $("input#playerXName").val();
    var playerXCharacter = $(".playerXCharacter:selected").val();
    playerX.name = playerXName;
    playerX.mark = playerXCharacter;

    $("form#playerX-piece").hide()
    $("form#playerO-piece").show()

  });

  $("form#playerO-piece").submit(function(event){
    event.preventDefault()

    var playerOName = $("input#playerOName").val();
    var playerOCharacter = $(".playerOCharacter:selected").val();
    playerO.name = playerOName;
    playerO.mark = playerOCharacter;

    $("form#playerO-piece").hide()
    $("#click-to-play").show()

  });

  $("#click-to-play").click(function() {
    $("#click-to-play").hide();
    $("#game").show();
    game.playerX = playerX
    game.playerO = playerO
    $("#player-turn").show();
    $("#player-name").text(playa.name);
  });


  $("#zero-zero").click(function() {
    $("#zero-zero").empty().append(playa.mark);
    gameBoard.markBy(0,0,playa);
    blerg = gameBoard.play(playa, gameBoard.gameArray);
    $("#zero-zero").off();
    if (blerg === true) {
      $("h2#winner").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);

  });

  $("#zero-one").click(function() {
    gameBoard.markBy(0,1,playa);
    $("#zero-one").empty().append(playa.mark);
    $("#zero-one").off();
    if (gameBoard.play(playa, gameBoard.gameArray) === true) {
      $("h2#winner").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#zero-two").click(function() {
    gameBoard.markBy(0,2,playa);
    $("#zero-two").empty().append(playa.mark);
    $("#zero-two").off();
    if (gameBoard.play(playa, gameBoard.gameArray) === true) {
      $("h2#winner").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#one-zero").click(function() {
    gameBoard.markBy(1,0,playa);
    $("#one-zero").empty().append(playa.mark);
    $("#one-zero").off();
    if (gameBoard.play(playa, gameBoard.gameArray) === true) {
      $("h2#winner").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#one-one").click(function() {
    gameBoard.markBy(1,1,playa);
    $("#one-one").empty().append(playa.mark);
    $("#one-one").off();
    if (gameBoard.play(playa, gameBoard.gameArray) === true) {
      $("h2#winner").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#one-two").click(function() {
    gameBoard.markBy(1,2,playa);
    $("#one-two").empty().append(playa.mark);
    $("#one-two").off();
    if (gameBoard.play(playa, gameBoard.gameArray) === true) {
      $("h2#winner").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#two-zero").click(function() {
    gameBoard.markBy(2,0,playa);
    $("#two-zero").empty().append(playa.mark);
    $("#two-zero").off();
    if (gameBoard.play(playa, gameBoard.gameArray) === true) {
      $("h2#winner").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#two-two").click(function() {
    gameBoard.markBy(2,2,playa);
    $("#two-two").empty().append(playa.mark);
    $("#two-two").off();
    if (gameBoard.play(playa, gameBoard.gameArray) === true) {
      $("h2#winner").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#two-one").click(function() {
    gameBoard.markBy(2,1,playa);
    $("#two-one").empty().append(playa.mark);
    $("#two-one").off();
    if (gameBoard.play(playa, gameBoard.gameArray) === true) {
      $("h2#winner").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });
});
