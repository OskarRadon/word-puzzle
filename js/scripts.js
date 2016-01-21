var puzzle = function(inputString) {
  return inputString.replace(/[aeiou]/gi, '-');
};

$(function() {
  $("form#puzzle").submit(function(event) {
    var inputString = $("input#string").val();
    $("div#result").text(puzzle(inputString));
    $("form#puzzle").hide();

    event.preventDefault();

  });
});
