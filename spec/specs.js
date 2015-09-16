describe("Player", function() {
  it('returns player mark', function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});
