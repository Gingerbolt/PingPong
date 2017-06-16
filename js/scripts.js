uselessOperation1 = function() {
  resultstring = "<li> Ping-Pong </li>"
};
uselessOperation2 = function() {
  resultstring = "<li> Pong </li>"
};
uselessOperation3 = function() {
  resultstring = "<li> Ping </li>"
};
uselessOperation4 = function() {
  resultstring = "<li> " + x + " </li>"
};
uselessOperationReject = function() {
  resultstring = "Please enter only positive non-zero integers to play!"
}
uselessOperationPrintout = function () {
  $("#result").append(resultstring);
}

$(document).ready(function() {
  $("form#submissionform").submit(function(event) {
    event.preventDefault();
    var usernumber = parseInt($("input#userinput").val());
    var resultstring = ""
    if (usernumber % 1 != 0 || usernumber <= 0) {
      uselessOperationReject();
    }
    else {
      for (x = 1; x <= usernumber; x += 1) {
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
