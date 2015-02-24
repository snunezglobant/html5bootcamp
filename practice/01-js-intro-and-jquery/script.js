$(document).ready(function(){


	$('section').fadeIn(3000);

	$('.alias').focus();


      $("button").click(function(){  
        var var1= $('.alias').val();
        var var2= "album";

        

        $.ajax("https://api.spotify.com/v1/search",{data:{'q': var1, 'type': var2}})
        .done(function(result){
          $('#albumes').empty();
          
          for(var i in result.albums.items){
            var html = "<li><p>Nombre del Album: "+result.albums.items[i].name+"<p>"
              +"<p>Tipo: "+result.albums.items[i].album_type+"<p>"
              +"<a href=\""+result.albums.items[i].external_urls.spotify+"\">"+"<p>Escucha aqui</p>"+"</a>"
              +"<img src=\""+result.albums.items[i].images[0].url+"\"/>"+"<li/>"

              $('#albumes').append(html);
            
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