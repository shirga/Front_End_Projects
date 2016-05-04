var queue = [];
var ans = 0;

function add2queu(dig) {
  queue.push(dig);
  $(".screen").html(queue.join(""));
}

function checkExpression(str) {
  // expression must start and end with digits and can't have more the one operator in a row 
  // or if expression has more the one dot in a number
  if (!str.match(/^[\d\.+\-]/) | !str.match(/[0-9\.]$/)) {
    return false;
  } else if (str.match(/[%*\/\.]{2}/)) {
    return false;
  } else if (str.match(/\.[0-9]+\./)) {
    return false;
  }
  return true
}

function getAns() {
  var str = queue.join("");
  if (checkExpression(str)) {
    ans = eval(str);
    queue = [];
    $(".screen").html(ans);
  } else {
    console.log("not valid");
  }
}

$(document).ready(function() {
  $(".queue").click(function() {
    add2queu($(this).attr("value"));
  });

  $("#ans").click(function() {
    add2queu(ans);
  });

  $("#ce").click(function() {
    queue.pop();
    $(".screen").html(queue.join(""));
  });
  $("#ac").click(function() {
    queue = [];
    $(".screen").html(queue.join(""));
  });
  $("#equle").click(function() {
    getAns();
  });

});