$(document).ready(function() {
  $("form#submissionform").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userinput").val());
    var resultString = ""
    if (userNumber % 1 != 0 || userNumber <= 0) {
      resultString = "Please enter only positive non-zero integers to play!"
    }
    else {
      for (x = 1; x <= userNumber; x += 1) {
        if ( x % 15 === 0 && x >= 15) {
        resultString =   resultString.concat("<li> ").concat("Ping-Pong").concat(" </li> ")
        }
        else if (x % 5 === 0 && x >= 5) {
        resultString = resultString.concat("<li> ").concat("Pong").concat(" </li> ")
        }
        else if (x % 3 === 0 && x >= 3) {
        resultString = resultString.concat("<li> ").concat("Ping").concat(" </li> ")
        }
        else {
        resultString = resultString.concat("<li> ").concat(x).concat(" </li> ")
        }
      }
    }
    $("#result").append(resultString)
  });
});
