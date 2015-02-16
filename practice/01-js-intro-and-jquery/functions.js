// Exercise 5
$("document").ready(function() {
  $(".hidden").fadeIn("slow", function() {
    // Exercise 6
    $(".alias").focus();
  });

  // Exercise 7
  $("#greet-bt").click(greet);
});

function greet() {
  var jsonResponse = $.getJSON("http://bootcamp.aws.af.cm/welcome/" + $(".alias").val());
  /* disable input while request is being processed, re enable when response is received */
  $(".alias").prop("disabled", true);

  jsonResponse.always(function() {
    $(".alias").prop("disabled", false); 
  });

  // Exercise 8
  jsonResponse.done(function(json) {
    $(".welcome").html("<p>"+json.response+"</p>");

    // Exercise 10
    highlightName();
  });

  // Exercise 9
  jsonResponse.fail(function() {
    $(".welcome").html("<p style=\"color: red;\">Error</p>");
  });
}

function highlightName() {
  var name = $(".alias").val();
  var newStr = $(".welcome").html().replace(name, "<span style=\"color: #66f;\">"+name+"</span>");
  $(".welcome").html(newStr);
}