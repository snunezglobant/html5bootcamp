/*************************/
/*  Excercise 1.5 & 1.6  */
$("#hidden").fadeIn(2000, function(){
    $(".alias").focus();
    $(".alias").css("border-color", "red"); // Just for check
});


/********************/
/*  Excercise 1.7   */
var name = "Alvaro";

$("#button").click (function(){
    $.ajax("http://bootcamp.aws.af.cm/welcome/" +  name)
        .done(function(result){
            console.log("done");
            $("#hidden").css("background-color", "yellow");
            $("#hidden").html(result.response);
        })
        .fail(function(){
            console.log("error");
            $("#hidden").css("color", "red");
            $("#hidden").html("Error");
        })
        .always(function(){
            console.log("Finish");
        });
});