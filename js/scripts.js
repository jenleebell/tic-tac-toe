var Player = function(name, mark) {
  this.name = name
  this.mark = mark;
};

var Space = function(position) {
  this.position = position
};

var Board = function(player1, player2) {
  this.gameArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.player1 = player1
  this.player2 = player2
  this.turn = player1
};

Board.prototype.changeTurn = function() {
  if (this.turn === this.player1) {
    this.turn = this.player2;
  } else {
    this.turn = this.player1;
  }
}

Board.prototype.mark = function(position, player) {
  if (this.gameArray.indexOf(position) !== -1 ) {
    this.gameArray[position] = player;
  }
};

Board.prototype.winner = function(player) {

  var combo1 = this.gameArray[0] === player && this.gameArray[4] === player && this.gameArray[8] === player
  var combo2 = this.gameArray[0] === player && this.gameArray[1] === player && this.gameArray[2] === player
  var combo3 = this.gameArray[3] === player && this.gameArray[4] === player && this.gameArray[5] === player
  var combo4 = this.gameArray[6] === player && this.gameArray[7] === player && this.gameArray[8] === player
  var combo5 = this.gameArray[0] === player && this.gameArray[3] === player && this.gameArray[6] === player
  var combo6 = this.gameArray[1] === player && this.gameArray[7] === player && this.gameArray[4] === player
  var combo7 = this.gameArray[2] === player && this.gameArray[5] === player && this.gameArray[8] === player
  var combo8 = this.gameArray[6] === player && this.gameArray[4] === player && this.gameArray[2] === player

  if (combo1 || combo2 || combo3 || combo4 || combo5 || combo6 || combo7 || combo8) {
    return true;
  } else if ((/\d/).test(this.gameArray) === false) {
    return false
  } else {
    return null;
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
  $("#winner").hide();

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
    $("#player-turn").show();
    $("#player-name").text(playa.name);
  });


  $("#zero-zero").click(function() {
    $("#zero-zero").empty().append('<img src="img/' + playa.mark + '">');
    gameBoard.mark(0,playa);
    blerg = gameBoard.winner(playa);
    $("#zero-zero").off();
    if (blerg === true) {
      $("#winner").text("You won the game " + playa.name + " holy shit!").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);

  });

  $("#zero-one").click(function() {
    gameBoard.mark(3,playa);
    $("#zero-one").empty().append('<img src="img/' + playa.mark + '">');
    $("#zero-one").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("You won the game " + playa.name + " holy shit!").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#zero-two").click(function() {
    gameBoard.mark(6,playa);
    $("#zero-two").empty().append('<img src="img/' + playa.mark + '">');
    $("#zero-two").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("You won the game " + playa.name + " holy shit!").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#one-zero").click(function() {
    gameBoard.mark(1,playa);
    $("#one-zero").empty().append('<img src="img/' + playa.mark + '">');
    $("#one-zero").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("You won the game " + playa.name + " holy shit!").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#one-one").click(function() {
    gameBoard.mark(4,playa);
    $("#one-one").empty().append('<img src="img/' + playa.mark + '">');
    $("#one-one").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("You won the game " + playa.name + " holy shit!").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#one-two").click(function() {
    gameBoard.mark(7,playa);
    $("#one-two").empty().append('<img src="img/' + playa.mark + '">');
    $("#one-two").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("You won the game " + playa.name + " holy shit!").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#two-zero").click(function() {
    gameBoard.mark(2,playa);
    $("#two-zero").empty().append('<img src="img/' + playa.mark + '">');
    $("#two-zero").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("You won the game " + playa.name + " holy shit!").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#two-two").click(function() {
    gameBoard.mark(8,playa);
    $("#two-two").empty().append('<img src="img/' + playa.mark + '">');
    $("#two-two").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("You won the game " + playa.name + " holy shit!").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });

  $("#two-one").click(function() {
    gameBoard.mark(5,playa);
    $("#two-one").empty().append('<img src="img/' + playa.mark + '">');
    $("#two-one").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("You won the game " + playa.name + " holy shit!").show();
    }
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
  });
});
