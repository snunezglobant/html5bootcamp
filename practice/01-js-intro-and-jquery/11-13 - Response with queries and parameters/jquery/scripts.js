var name = "Gonzalo";
var album = "album";

function visible() {
   document.getElementById("section").style.visibility = "visible";
}

$('document').ready(function() {


   $('.alias').focus();
   $('.alias').css('border-color', 'red');

                                   
    var query;
    query= $.ajax({url: "https://api.spotify.com/v1/search",
    type:"get", 
    data:{
        q: "Rolling Stones",
        type: "album"
    }});
     
    query.done(function(response){
        console.log(response);
    });
      
    query.fail(function(){
        console.log("Error");
    });
      
    query.always(function(){
         console.log("Everything ok");
    });  
         
      

    $("#find").click(function(){
        var artist=document.getElementById("txtsearch").value; 
        $.ajax("https://api.spotify.com/v1/search",{data:{'q': artist, 'type': album}})
        .done(function(result){
            $("#metadata").css('display','block');
            $("#metadata").html("<img src=\""+result.albums.items[0].images[0].url+"\"/>");
            $("#artists").css('display','block');
            $("#name").html(result.albums.items[0].name);
            $("#atype").html(result.albums.items[0].album_type);
            $("#type").html(result.albums.items[0].type);
            $("#link").html(result.albums.items[0].external_urls.spotify);
            $("#link").attr("href",result.albums.items[0].external_urls.spotify);
            $("#content").css("visibility","visible");
            console.log(result);
        })
        .fail(function(){
            console.log("Error");
        })
        .always(function(){
            console.log("Eitherway you'll get this");
        });

    });

});