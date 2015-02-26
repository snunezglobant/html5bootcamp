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

/*************************/
/*  Excercise 1.11 -1.12 */
var searchAlbums = function(search){
    console.log("Hello, I'm searching");
    console.log(search);
    var type = 'album';
    var url = 'https://api.spotify.com/v1/search';
    var imgSizeIndex = 2;

    $.ajax({
        dataType: "json",
        url: url,
        data: {
            q: search,
            type: type
        },
        // to show: name, type, image, release_date, and a link to spotify for that album
        // THERE'S NOT ANY RELEASE DATE IN THE RESPONSE, SORRY
        success: function(response){
            var html = '';
            //console.log(response); //For future debugging

            for (var i = 0; i < response.albums.items.length; i++) {
                var html = '';
                html += '<tr><td><img src="'
                        + response.albums.items[i].images[imgSizeIndex].url
                        + '" width=' + response.albums.items[i].images[imgSizeIndex].width
                        + ' height='+ response.albums.items[i].images[imgSizeIndex].height
                        + '></td>';

                html += '<td><p><b>Album Name:</b> '
                        + response.albums.items[i].name
                        + '</p>';

                html += '<p><b>Type:</b> '
                        + response.albums.items[i].album_type
                        + '</p>';

                html += '<p><b>link:</b> '
                        + '<a href="'
                        + response.albums.items[i].external_urls.spotify
                        + '">Link to spotify</a>'
                        + '</p></tr>';
                $("#results").append(html);
            };
        }
    });
}

$("#search-form").submit(function(event){
    event.preventDefault();
    var queryValue = $("#query").val();
    searchAlbums(queryValue);

});