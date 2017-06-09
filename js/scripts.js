$(document).ready(function() {
  $("form#submissionform").submit(function(event) {
    event.preventDefault();
    var usernumber = parseInt($("input#userinput").val());
    var userstring = usernumber.toString();
    var resultstring = ""
    for (x = 1; x <= usernumber; x += 1) {
      if ( x % 15 === 0) {
        resultstring = resultstring.concat("<li>").concat("Ping-Pong").concat("</li>")
      }
      else if (x % 5 === 0) {
        resultstring = resultstring.concat("<li>").concat("Pong").concat("</li>")
      }
      else if (x % 3 === 0) {
        resultstring = resultstring.concat("<li>").concat("Ping").concat("</li>")
      }
      else {
        resultstring = resultstring.concat("<li>").concat(x).concat("</li>")
      }
      $("#result").append(resultstring)
    }
  });
});
