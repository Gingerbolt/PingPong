
$(document).ready(function() {
  $("form#submissionform").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userinput").val());
    var finalString = "";
    if (userNumber % 1 != 0 || userNumber <= 0) {
      resultString = "Please enter only positive non-zero integers to play!"
    } else {
      for (x = 1; x <= userNumber; x += 1) {
        if ( x % 15 === 0 && x >= 15) {
        resultString = "Ping-Pong";
        } else if (x % 5 === 0) {
        resultString = "Pong";
        } else if (x % 3 === 0) {
        resultString = "Ping";
        } else {
        resultString = x;
        };
        finalString = finalString + resultString + "<br>"
      };
    $("#result").empty();
    $("#result").prepend(finalString);
  };
  });
});
