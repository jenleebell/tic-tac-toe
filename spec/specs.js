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
      testSpace.markBy(testPlayer)
      expect(testSpace.markedBy()).to.equal(testPlayer.mark);
   });
});
