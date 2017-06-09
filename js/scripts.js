$(document).ready(function() {
  $("form#submissionform").submit(function(event) {
    event.preventDefault();
    var usernumber = parseInt($("input#userinput").val());
    var resultstring = ""
    if (usernumber % 1 != 0 || usernumber <= 0) {
      resultstring = "Please enter only positive non-zero integers to play!"
    }
    else {
      for (x = 1; x <= usernumber; x += 1) {
        if ( x % 15 === 0 && x >= 15) {
        resultstring =   resultstring.concat("<li> ").concat("Ping-Pong").concat(" </li> ")
        }
        else if (x % 5 === 0 && x >= 5) {
        resultstring = resultstring.concat("<li> ").concat("Pong").concat(" </li> ")
        }
        else if (x % 3 === 0 && x >= 3) {
        resultstring = resultstring.concat("<li> ").concat("Ping").concat(" </li> ")
        }
        else {
        resultstring = resultstring.concat("<li> ").concat(x).concat(" </li> ")
        }
      }
    }
    $("#result").append(resultstring)
  });
});
