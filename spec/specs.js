describe("Player", function() {
  it('returns player mark', function() {
    var testPlayer = new Player("Mark","X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the x-coordinate", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.xcoordinate).to.equal(1);
  });

  it("returns the y-coordinate", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.ycoordinate).to.equal(2);
  });

  it("lets a player mark a space", function() {
      var testPlayer = new Player("X")
      var testSpace = new Space(1,2);
      var testBoard = new Board();
      testSpace.markBy(testPlayer, testBoard)
      expect(testSpace.markedBy(testBoard)).to.equal(testPlayer.mark);
  });
});


describe("Board", function() {
  it("returns wins", function() {
    var testPlayer1 = new Player("Jim","X")
    var testPlayer2 = new Player("Bob","O")
    var testSpace1 = new Space(0,0);
    var testSpace2 = new Space(1,1);
    var testSpace3 = new Space(2,2);
    var testBoard = new Board(testPlayer1, testPlayer2);
    testSpace1.markBy(testPlayer1, testBoard);
    testSpace2.markBy(testPlayer1, testBoard);
    testSpace3.markBy(testPlayer1, testBoard);
    expect(testBoard.play(testPlayer1, testBoard.gameArray)).to.equal(true);
  });
  it("returns false if no win", function() {
    var testPlayer1 = new Player("Jim","X")
    var testPlayer2 = new Player("Bob","O")
    var testSpace1 = new Space(0,0);
    var testSpace2 = new Space(1,1);
    var testSpace3 = new Space(2,2);
    var testBoard = new Board(testPlayer1, testPlayer2);
    testSpace1.markBy(testPlayer1, testBoard);
    testSpace2.markBy(testPlayer1, testBoard);
    expect(testBoard.play(testPlayer1, testBoard.gameArray)).to.equal(false);
  });
  it("changes player and returns the turn", function(){
    var testPlayer1 = new Player("Jim","X")
    var testPlayer2 = new Player("Bob","O")
    var testSpace1 = new Space(0,0);
    var testSpace2 = new Space(1,1);
    var testSpace3 = new Space(2,2);
    var testBoard = new Board(testPlayer1, testPlayer2);
    testSpace1.markBy(testPlayer1, testBoard);
    testBoard.changeTurn();
    testBoard.changeTurn();
    expect(testBoard.turn).to.equal(testPlayer1)
  });
});
