uselessOperation1 = function() {
  resultString = "<li> Ping-Pong </li>"
};
uselessOperation2 = function() {
  resultString = "<li> Pong </li>"
};
uselessOperation3 = function() {
  resultString = "<li> Ping </li>"
};
uselessOperation4 = function() {
  resultString = "<li> " + x + " </li>"
};
uselessOperationReject = function() {
  resultString = "Please enter only positive non-zero integers to play!"
}
uselessOperationPrintout = function () {
  $("#result").append(resultString);
}

$(document).ready(function() {
  $("form#submissionform").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userinput").val());
    var resultString = ""
    if (userNumber % 1 != 0 || userNumber <= 0) {
      uselessOperationReject();
    }
    else {
      for (x = 1; x <= userNumber; x += 1) {
        if ( x % 15 === 0 && x >= 15) {
        uselessOperation1();
        } else if (x % 5 === 0) {
        uselessOperation2();
        } else if (x % 3 === 0) {
        uselessOperation3();
        } else {
        uselessOperation4();
      };
      }
    }
    uselessOperationPrintout();

  });
});
