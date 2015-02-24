/*************************/
/*  Excercise 1.5 & 1.6  */
$("#hidden").fadeIn(2000, function(){
    $(".alias").focus();
    $(".alias").css("border-color", "red"); // Just for check
});


/**************************/
/*  Excercise 1.7 - 1.10  */
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

/**************************/
/*  Excercise 1.11  */
var search = 'Rolling Stones';
var type = 'album';
var url = 'https://api.spotify.com/v1/search';

$.ajax({
    dataType: "json",
    url: url,
    data: {
        q: search,
        type: type
    },
    success: function(response){
        console.log(response);
        var albums = [];
        $.each(response, function(album){
            albums.push(album.items[0].name); // Don't know how to catch the items in the response
        });
    }
});