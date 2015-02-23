
$(document).ready(function(){
	$("section").fadeIn("slow", function() {
		$(".alias").focus();
	});
	$("button").click(function(){
		var name = $(".alias").val();
   		$.ajax({
   			url: "http://bootcamp.aws.af.cm/welcome/" + name, 
     		success:function(data){
      			$("section").html("<p id=\"text\" >" + data.response + "</p>");
    			highlightName(data.response, name);
    		},
    		error:function(data){ 
   	  			$("section").text("Error"); 
      			$("section").css("color","red");
    		}
		});
	});	
});

function highlightName(data,name) {
 	var str = data.replace(name, "<span><strong>" + name + "</strong></span>");
 	$('#text').html(str);
}


