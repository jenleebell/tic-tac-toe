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
    $("#game").fadeIn(1000);
    $("#player-turn").show();
    $("#player-name").text(playa.name);
  });


  $("#zero").click(function() {
    $("#picture0").empty().append('<img src="img/' + playa.mark + '">').hide().fadeIn(2000);
    gameBoard.mark(0,playa);
    blerg = gameBoard.winner(playa);
    $("#zero").off();
    if (blerg === true) {
      $("#winner").text("congratulations" + playa.name + ", you have won the game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else if (gameBoard.winner(playa) === false) {
      $("#winner").text("this is a tie game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else {
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
    }

  });

  $("#three").click(function() {
    gameBoard.mark(3,playa);
    $("#picture3").empty().append('<img src="img/' + playa.mark + '">').hide().fadeIn(2000);
    $("#three").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("congratulations" + playa.name + ", you have won the game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else if (gameBoard.winner(playa) === false) {
      $("#winner").text("this is a tie game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else {
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
    }

  });

  $("#six").click(function() {
    gameBoard.mark(6,playa);
    $("#picture6").empty().append('<img src="img/' + playa.mark + '">').hide().fadeIn(2000);
    $("#six").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("congratulations" + playa.name + ", you have won the game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else if (gameBoard.winner(playa) === false) {
      $("#winner").text("this is a tie game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else {
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
    }

  });

  $("#one").click(function() {
    gameBoard.mark(1,playa);
    $("#picture1").empty().append('<img src="img/' + playa.mark + '">').hide().fadeIn(2000);
    $("#one").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("congratulations" + playa.name + ", you have won the game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else if (gameBoard.winner(playa) === false) {
      $("#winner").text("this is a tie game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else {
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
    }

  });

  $("#four").click(function() {
    gameBoard.mark(4,playa);
    $("#picture4").empty().append('<img src="img/' + playa.mark + '">').hide().fadeIn(2000);
    $("#four").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("congratulations" + playa.name + ", you have won the game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else if (gameBoard.winner(playa) === false) {
      $("#winner").text("this is a tie game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else {
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
    }

  });

  $("#seven").click(function() {
    gameBoard.mark(7,playa);
    $("#picture7").empty().append('<img src="img/' + playa.mark + '">').hide().fadeIn(2000);
    $("#seven").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("congratulations" + playa.name + ", you have won the game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else if (gameBoard.winner(playa) === false) {
      $("#winner").text("this is a tie game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else {
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
    }

  });

  $("#two").click(function() {
    gameBoard.mark(2,playa);
    $("#picture2").empty().append('<img src="img/' + playa.mark + '">').hide().fadeIn(2000);
    $("#two").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("congratulations" + playa.name + ", you have won the game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else if (gameBoard.winner(playa) === false) {
      $("#winner").text("this is a tie game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else {
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
    }

  });

  $("#eight").click(function() {
    gameBoard.mark(8,playa);
    $("#picture8").empty().append('<img src="img/' + playa.mark + '">').hide().fadeIn(2000);
    $("#eight").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("congratulations" + playa.name + ", you have won the game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else if (gameBoard.winner(playa) === false) {
      $("#winner").text("this is a tie game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else {
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
    }

  });

  $("#five").click(function() {
    gameBoard.mark(5,playa);
    $("#picture5").empty().append('<img src="img/' + playa.mark + '">').hide().fadeIn(2000);
    $("#five").off();
    if (gameBoard.winner(playa) === true) {
      $("#winner").text("congratulations" + playa.name + ", you have won the game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else if (gameBoard.winner(playa) === false) {
      $("#winner").text("this is a tie game").slideDown();
      $("#game").fadeOut(1000);
      $("#player-turn").fadeOut(1000);
      $("h1").text("would you like to play again?");
    } else {
    gameBoard.changeTurn()
    playa = gameBoard.turn
    $("#player-name").text(playa.name);
    }

  });
});
