var name = "Juan%20Pablo";
var vAlbum = "album";

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
            $("#mydiv").css('color', 'red');
         })
         .always(function() {
            console.log("Finish");
         });

   });

    
    $("#search").click(function(){
        vArtist=document.getElementById("txtsearch").value; 
        $.ajax("https://api.spotify.com/v1/search",{data:{'q': vArtist, 'type': vAlbum}})
        .done(function(result){
            $("#albumimg").css('display','block');
            $("#albumimg").html("<img src=\""+result.albums.items[0].images[0].url+"\"/>");
            $("#artist").css('display','block');
            $("#name").html(result.albums.items[0].name);
            $("#albumtype").html(result.albums.items[0].album_type);
            $("#type").html(result.albums.items[0].type);
            $("#link").html(result.albums.items[0].external_urls.spotify);
            $("#link").attr("href",result.albums.items[0].external_urls.spotify);
            $("#contentalbum").css("visibility","visible");
            console.log(result);
        })
        .fail(function(){
            alert("error");
        })
        .always(function(){
            console.log("Complete");
        });

    });

});

