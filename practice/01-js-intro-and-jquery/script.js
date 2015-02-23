$(document).ready(function()
{
	
/*$("section").fadeOut("slow", function(){$(".alias").focus()});*/

$("button").click(function(){
	$.ajax({ url: "http://bootcamp.aws.af.cm/welcome/" + $(".alias").val(), 
			success:function(data){
				console.log(data);
			$("section").html("<p>"+data.response+"</p>");},
			error:function(data){ 
				$("section").text("Error occurs"); 
				$("section").css("font-color","red");}
			});
		});

$.ajax( "https://api.spotify.com/v1/search",
 {data: {q: "rolling stones", type: "album"}})
.done(function(response){
	$("#image").html("<img src=\""+response.albums.items[0].images[2].url+"\"/>");
	$("#name").html(response.albums.items[0].name);
	$("#type").html(response.albums.items[0].type);
	$("#link").html(response.albums.items[0].external_urls.spotify);
	$("#link").attr("href",response.albums.items[0].external_urls.spotify);
	console.log(response);
});

});
