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
    expect(testBoard.play(testPlayer)).to.equal("Win");
  });
});
