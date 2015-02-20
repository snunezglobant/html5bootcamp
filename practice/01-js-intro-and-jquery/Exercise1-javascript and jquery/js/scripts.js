/*** TO HIDE THE HELLO WORLD SECTION***/
function hidesection(){
	document.getElementByID('#hidden').style.visibility="hidden";
}

/*** set the focus into the text box***/
$('document').ready(function(){

	$('.alias').focus();

	$('.alias').css('border-color','red');

	$("#acept").click(function(){
        var name="Marcos";
        $.ajax({url: "http://bootcamp.aws.af.cm/welcome/"+name, success: function(result){
            var changetext=JSON.stringify(result);
            var txt=changetext.substring(13,28);
            $("#hidden").css('visibility','visible');
            $("#newtext").text(txt);



        }, error: function (xhr, ajaxOptions, thrownError) {
            $("#hidden").css('visibility','visible');
            $("#newtext").text("An error ocurred, status="+xhr.status);
            $("#newtext").css('color','red');
      }});
    });

});

/*this function isn´t working yet*/
/*function hlight(result){
    var hltxt1=result.substring(13,19);
    var hltxt2=result.substring(21,27);
    var className="highlighttext";
    var hlresult="<span class=\"" + className + "\">" + hltxt2 + "</span>";
    var total=hltxt1+" "+hlresult+"!";
    $("#newtext").text(total);
}*/


   

