describe("Player", function() {
  it('returns player mark', function() {
    var testPlayer = new Player("X");
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
    var testPlayer = new Player("X")
    var testSpace1 = new Space(0,0);
    var testSpace2 = new Space(1,1);
    var testSpace3 = new Space(2,2);
    var testBoard = new Board();
    testSpace1.markBy(testPlayer, testBoard);
    testSpace2.markBy(testPlayer, testBoard);
    testSpace3.markBy(testPlayer, testBoard);
    expect(testBoard.play(testPlayer, testBoard.gameArray)).to.equal(true);
  });
});

describe("Turn", function() {
  it("changes player and returns the turn", function(){
    var testPlayerX = new Player("X");
    var testPlayerO = new Player("O");
    var testSpace1 = new Space(0,0);
    var testBoard = new Board();
    var testTurnArr = new Turn(0, testPlayerX, testPlayerO);
    var testTurn = testTurnArr[0];
    var turnArr = Turn(testTurn, testPlayerX, testPlayerO);
    var newTestTurn = turnArr[0];
    var newPlayer = turnArr[1];

    expect(newTestTurn).to.eql(0)
    expect(newPlayer).to.equal(testPlayerO);

    var newTestTurnTwo = Turn(newTestTurn, testPlayerX, testPlayerO);

    expect(newTestTurnTwo[0]).to.eql(1)
    expect(newTestTurnTwo[1]).to.eql(testPlayerX);

  });
});
