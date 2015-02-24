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
	for (var i = 0; i <= 100; i++) {
	$("#album").append("<p>\n" + "<img src=\""+response.albums.items[i].images[2].url+"\"/>"+ "</p>");
	$("#album").append("<p>\n" +response.albums.items[i].name+ "</p>");
	$("#album").append("<p>\n" +response.albums.items[i].type+ "</p>");
	$("#album").append("<p>\n <a href=\"" +response.albums.items[i].external_urls.spotify+  "\"> Link to Album \n\n</a>");
	$("#album").attr("href", response.albums.items[i].external_urls.spotify );
	console.log(response);
}
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
