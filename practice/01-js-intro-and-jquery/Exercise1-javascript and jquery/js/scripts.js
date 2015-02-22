
var name="Marcos";
var var1;//="Bruno Mars";
var var2 = "album";

function hidesection(){
	document.getElementById("hidden").style.visibility = "visible";
}


$('document').ready(function(){

	$('.alias').focus();
	$('.alias').css('border-color','red');


    /***GLOBANT RESPONSE***/
	$("#acept").click(function(){
        $.ajax("http://bootcamp.aws.af.cm/welcome/"+name)
        .done(function(result){
            console.log("succes!");
            $('#newtext').html(result.response);
            highlight(result.response,name);
        })
        .fail(function(){
            console.log("error");
            $('#newtext').html("A  server error ocurred");
            $("#newtext").css('color','red');
        })
        .always(function(){
            console.log("Complete");
        });

    });


    /***SPOTIFY RESPONSE***/
    $("#getres").click(function(){
        var1=document.getElementById("artband").value; 
        $.ajax("https://api.spotify.com/v1/search",{data:{'q': var1, 'type': var2}})
        .done(function(result){
            $("#spotifyalbum").css('display','block');
            $("#spotifyalbum").html("<img src=\""+result.albums.items[0].images[0].url+"\"/>");
            $("#spotifyart").css('display','block');
            $("#albumname").html(result.albums.items[0].name);
            $("#album_type").html(result.albums.items[0].album_type);
            $("#albumtype").html(result.albums.items[0].type);
            $("#albumlink").html(result.albums.items[0].external_urls.spotify);
            $("#albumlink").attr("href",result.albums.items[0].external_urls.spotify);
            console.log(result);
        })
        .fail(function(){
            alert("error");
        })
        .always(function(){
            console.log("Complete");
        });

    });

});

function highlight(res,name){
    var str = res.replace(name, "<span class=\"highlight\">"+name+"</span>");
    $('#newtext').html(str);
}


   

