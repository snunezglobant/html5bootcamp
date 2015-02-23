var name = "Juan%20Pablo";

function visibility() {
   document.getElementById("section").style.visibility = "visible";
}

$('document').ready(function() {

   $('.alias').focus();
   $('.alias').css('border-color', 'red');

   $("#button").click(function() {

      $.ajax("http://bootcamp.aws.af.cm/welcome/" + name)
         .done(function(result) {
            console.log("done");
            $("#mydiv").css('background-color', 'yellow');
            $("#mydiv").html(result.response);

         })
         .fail(function() {
            console.log("error");
            $("#mydiv").html("Error");
            $("#midyv").css('color', 'red');
         })
         .always(function() {
            console.log("Finish");
         });

   });


});

