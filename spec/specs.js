// describe("Player", function() {
//   it('returns player mark', function() {
//     var testPlayer = new Player("Mark","X");
//     expect(testPlayer.mark).to.equal("X");
//   });
// });
//
describe('Space', function() {
  it("lets a player mark a space", function() {
      var testPlayer1 = new Player("Jim","X")
      var testPlayer2 = new Player("Bob","O")
      var testBoard = new Board(testPlayer1, testPlayer2);
      testBoard.mark(0, testPlayer1)
      expect(testBoard.gameArray[0]).to.equal(testPlayer1);
  });
});


describe("Board", function() {
  it("returns wins", function() {
    var testPlayer1 = new Player("Jim","X")
    var testPlayer2 = new Player("Bob","O")
    var testBoard = new Board(testPlayer1, testPlayer2);
    testBoard.mark(0, testPlayer1);
    testBoard.mark(1, testPlayer1);
    testBoard.mark(2, testPlayer1);
    expect(testBoard.winner(testPlayer1)).to.equal(true);
  });
  it("returns ties", function() {
    var testPlayer1 = new Player("Jim","X")
    var testPlayer2 = new Player("Bob","O")
    var testBoard = new Board(testPlayer1, testPlayer2);
    testBoard.mark(0, testPlayer1);
    testBoard.mark(1, testPlayer2);
    testBoard.mark(2, testPlayer1);
    testBoard.mark(3, testPlayer1);
    testBoard.mark(4, testPlayer2);
    testBoard.mark(5, testPlayer2);
    testBoard.mark(6, testPlayer2);
    testBoard.mark(7, testPlayer1);
    testBoard.mark(8, testPlayer1);
    expect(testBoard.winner(testPlayer1)).to.equal(false);
  });
});
