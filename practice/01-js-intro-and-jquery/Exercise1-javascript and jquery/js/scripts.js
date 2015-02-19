/*** TO HIDE THE HELLO WORLD SECTION***/
function hidesection(){
	document.getElementByID('#hidden').style.visibility="hidden";
}

/*** set the focus into the text box***/
$('document').ready(function(){

	$('.alias').focus();

	$('.alias').css('border-color','red');

	$("#acept").click(function(){
        $.ajax({url: "http://bootcamp.aws.af.cm/welcome/yourname", success: function(result){
            //$("#div1").html(result);
            console.log(result);
            var cambio=JSON.stringify(result);
            alert(cambio);
        }});
    });

});


   

