//Excersise 1 to 10
$(document).ready(function(){
	$(".content").fadeIn("slow", function() {
		$(".alias").focus();
	});
	$("#button").click(function(){
		var name = $(".alias").val();
   		$.ajax({
   			url: "http://bootcamp.aws.af.cm/welcome/" + name, 
     		success: function(data){
      			$(".content").html("<p id=\"text\" >" + data.response + "</p>");
    			highlightName(data.response, name);
    		},
    		error: function(data){ 
   	  			$(".content").text("Error"); 
      			$(".content").css("color","red");
    		}
		});
	});	

//Exercise 11 and 12
  $("#search").click(function(){
    var band = $('#band').val();
    $.ajax({
      url: "https://api.spotify.com/v1/search",
      data: {q: band, type: "album"}
    })
    .done(function(response){
      for (var i = 0; i <= 10; i++) {
        $("#spotifyalbum").append("<img src=\"" + response.albums.items[i].images[0].url + "\"/>");
        $("#spotifyalbum").append("<p><strong>Album:</strong>\n" + response.albums.items[i].name + "</p>");
        $("#spotifyalbum").append("<p><strong>Album type:</strong>\n" + response.albums.items[i].album_type+ "</p>");
        $("#spotifyalbum").append("<p>\n <a href=\"" +  response.albums.items[i].external_urls.spotify + "\"> Link to Spotify \n\n</a>");
      }
    });
  });
});

function highlightName(data,name) {
 	var str = data.replace(name, "<span><strong>" + name + "</strong></span>");
 	$('#text').html(str);
}





