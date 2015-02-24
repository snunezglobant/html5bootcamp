$(document).ready(function()
{

$("section").fadeOut("slow", function(){$(".alias").focus()});

$("#clickme").click(function(){
	$.ajax({ url: "http://bootcamp.aws.af.cm/welcome/" + $(".alias").val(), 
			success:function(data){
				console.log(data);
			$("#welcome").html("<p>"+data.response+"</p>");},
			error:function(data){ 
				$("section").text("Error occurs"); 
				$("section").css("font-color","red");}
			});
		});
$("#buscar").click(function(){
	var1=$("#nombre").val();
	$.ajax( "https://api.spotify.com/v1/search",
 	{data: {q: var1, type: "album"}})
.done(function(response){
	$("#image").css("display","block");
	$("#image").html("<img src=\""+response.albums.items[0].images[2].url+"\"/>");
	$("#name").html(response.albums.items[0].name);
	$("#type").html(response.albums.items[0].type);
	$("#link").html(response.albums.items[0].external_urls.spotify);
	$("#link").attr("href",response.albums.items[0].external_urls.spotify);
	console.log(response);
})
.fail(function(){
	alert("error");
})
.always(function(){
	console.log("complete");
});

});
});

/*
function highlight(res,name){
	var str= res.replace(name, "<span class=\"highlight\">"+name+"</span>");
	$("#newtext").html(str);
}
*/
