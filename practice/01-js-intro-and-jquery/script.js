$(document).ready(function(){

	$('.alias').focus(function(){

			$('section').fadeIn(3000);
		});

	/*
	
	$('button').click( function(){
		$.ajax('http://bootcamp.aws.af.cm/welcome/yourname',

			success: function(response){
				$('section').html(response).fadeIn();

			},
			error: function(){
				$('section').css('font-color':'red');


			}
	});
		
	--------
		I put this as a comment, because when I run it does not show me anything, not even what it shows me now. I would like to know where my mistake because I think the syntax is fine. Thank You

	*/
});