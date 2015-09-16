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
});
