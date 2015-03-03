$('document').ready(function() {

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

        var artist=$("#search").val(); 

        $.ajax("https://api.spotify.com/v1/search",{data:{'q': artist, 'type': 'album'}})
            .done(function(response){
                $("#name").html(response.albums.items[0].name);
                $("#atype").html(response.albums.items[0].album_type);
                $("#image").attr("src",response.albums.items[0].images[0].url);
                $("#link").html(response.albums.items[0].external_urls.spotify);
                $("#link").attr("href",response.albums.items[0].external_urls.spotify);
                
                $("#contentalbum").css("display","block");

                console.log(response);
        })

        .fail(function(){
            console.log("Error");
        })

        .always(function(){
            console.log("Eitherway you'll get this");
        });
    });
});