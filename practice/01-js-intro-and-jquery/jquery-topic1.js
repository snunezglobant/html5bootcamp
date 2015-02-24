
	$(document).ready(function()
{
 
   $("section").fadeOut("slow", function(){$(".alias").focus()}); 


   $("button").click(function(){
   $.ajax({ url: "http://bootcamp.aws.af.cm/welcome/" + $(".alias").val(), 
  
   success:function(data){
    console.log(data);
    $(".content").html("<p>"+data.response+"</p>");},
  

   error:function(response){ 
    $("section").text("Error occurs"); 
    $("section").css("color","red");}
   });
  });











$("#search").click(function(){
 

  var1=$("#bandname").val();
  $.ajax( "https://api.spotify.com/v1/search", {data: {q: var1, type: "album"}})

  

   .done(function(result){


for(i=0;i<=50;i++)
{

 $("#spotifyalbum").css('display','block');
 $("#spotifyalbum").append("<img src=\""+result.albums.items[i].images[0].url+"\"/>");
 $("#spotifyalbum").append("<p>\n" + result.albums.items[i].name + "</p>");
 $("#spotifyalbum").append("<p>\n" + result.albums.items[i].album_type+ "</p>");
 $("#spotifyalbum").append("<p>\n" + result.albums.items[i].type+ "\n</p>");
 $("#spotifyalbum").append("<p>\n <a href=\"" +  result.albums.items[i].external_urls.spotify + "\"> Link to Album \n\n</a>");
 // $("#spotifyalbum").attr("href" ,result.albums.items[i].external_urls.spotify);

}




 console.log(result);





})

.fail(function(){
 alert("error");
})
.always(function(){
 console.log("complete");
});

 });
  });