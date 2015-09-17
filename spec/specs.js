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
//
//
// describe("Board", function() {
//   it("returns wins", function() {
  //   var testPlayer1 = new Player("Jim","X")
  //   var testPlayer2 = new Player("Bob","O")
  //   var testSpace1 = new Space(0,0);
  //   var testSpace2 = new Space(1,1);
  //   var testSpace3 = new Space(2,2);
  //   var testBoard = new Board(testPlayer1, testPlayer2);
  //   testSpace1.markBy(testPlayer1, testBoard);
  //   testSpace2.markBy(testPlayer1, testBoard);
  //   testSpace3.markBy(testPlayer1, testBoard);
  //   expect(testBoard.play(testPlayer1, testBoard.gameArray)).to.equal(true);
  // });
//   it("returns false if no win", function() {
//     var testPlayer1 = new Player("Jim","X")
//     var testPlayer2 = new Player("Bob","O")
//     var testSpace1 = new Space(0,0);
//     var testSpace2 = new Space(1,1);
//     var testSpace3 = new Space(2,2);
//     var testBoard = new Board(testPlayer1, testPlayer2);
//     testSpace1.markBy(testPlayer1, testBoard);
//     testSpace2.markBy(testPlayer1, testBoard);
//     expect(testBoard.play(testPlayer1, testBoard.gameArray)).to.equal(false);
//   });
//   it("changes player and returns the turn", function(){
//     var testPlayer1 = new Player("Jim","X")
//     var testPlayer2 = new Player("Bob","O")
//     var testSpace1 = new Space(0,0);
//     var testSpace2 = new Space(1,1);
//     var testSpace3 = new Space(2,2);
//     var testBoard = new Board(testPlayer1, testPlayer2);
//     testSpace1.markBy(testPlayer1, testBoard);
//     testBoard.changeTurn();
//     testBoard.changeTurn();
//     expect(testBoard.turn).to.equal(testPlayer1)
//   });
// });
