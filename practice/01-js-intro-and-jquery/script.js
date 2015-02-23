$(document).ready(function(){


	$('section').fadeIn(3000);

	$('.alias').focus();


      $("button").click(function(){  
        var var1= $('.alias').val();
        var var2= "album";

        $.ajax("https://api.spotify.com/v1/search",{data:{'q': var1, 'type': var2}})
        .done(function(result){
          $('#albumes').html("");
          for(var i=0;i<(result.albums.items).length;i++){
            $('#albumes').append("<li><p>Nombre del Album: "+result.albums.items[i].name+"<p>"
              +"<p>Tipo: "+result.albums.items[i].album_type+"<p>"
              +"<a href=\""+result.albums.items[i].external_urls.spotify+"\">"+"<p>Escucha aqui</p>"+"</a>"
              +"<img src=\""+result.albums.items[i].images[0].url+"\"/>"+"<li/>")
            
          }
        })
        .fail(function(){
            alert("Error!");
        })
        .always(function(){
            console.log("Complete");
        });

      });

});	