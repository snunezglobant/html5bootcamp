
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


 $("#spotifyalbum").css('display','block');
 $("#spotifyalbum").html("<img src=\""+result.albums.items[0].images[0].url+"\"/>");
 $("#albumname").html(result.albums.items[0].name);
 $("#albumtype").html(result.albums.items[0].album_type);
 $("#album_type").html(result.albums.items[0].type);
 $("#albumlink").html(result.albums.items[0].external_urls.spotify);
 $("#albumlink").attr("href" ,result.albums.items[0].external_urls.spotify);






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