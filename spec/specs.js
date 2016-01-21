describe('puzzle', function() {
  // it("split input string into an array", function() {
  //   expect(puzzle("Hello there")).to.eql(["Hello", "there"]);
  // });

  it("finds all vowels and replaces them with '-'", function(){
    expect(puzzle("Hello there")).to.equal("H-ll- th-r-");
  });
});
