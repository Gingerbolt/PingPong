// back end
pingPongProcess = function(countNumber){
  if ( countNumber % 15 === 0 && countNumber >= 15) {
  return "Ping-Pong";
  } else if (countNumber % 5 === 0) {
  return "Pong";
  } else if (countNumber % 3 === 0) {
  return "Ping";
  } else {
  return countNumber;
  };
};
// front end
$(document).ready(function() {
  $("form#submissionform").submit(function(event) {
    event.preventDefault();
    var finalString = "";
    var userNumber = parseInt($("input#userinput").val());

    if (userNumber % 1 != 0 || userNumber <= 0) {
      finalString = "Please enter only positive non-zero integers to play!";
    } else {
      for (x = 1; x <= userNumber; x++) {
        finalString = finalString + pingPongProcess(x) + "<br>";
      };
    };
    
    $("#result").empty();
    $("#result").prepend(finalString);
  });
});
