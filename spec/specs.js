describe("Player", function() {
  it('returns player mark', function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the x coordinate", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.xcoordinate).to.equal(1);
  });
});
