$(document).ready(function(){


	$('section').fadeIn(3000);

	$('.alias').focus();

	$("button").click( function() {
		$.ajax('http://bootcamp.aws.af.cm/welcome/nicolas', {
     	 success: function(result) {
        $('section').html(result.response);
      },
      	 error: function(){

      	 	$('section').css('font-color','red');

      	 },
         complete: function(){

          $('section').highlight('nicolas');




           }});
      });

       $.ajax('https://api.spotify.com/v1/search',{data: "q=Rolling Stones&type=album"},
        function(response){
            console.log(response);
        }

       );

});	