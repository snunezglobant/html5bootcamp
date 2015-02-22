$(document).ready( function() {
  $('section').fadeIn('slow', function() {
    $('.alias').focus();
  });
  $('#submit').click(getResponse, function(){
    //highlight name function
  });
});

function getResponse(){
	var bootcampAPI = "http://bootcamp.aws.af.cm/welcome/" + $('.alias').val();
	$.getJSON (bootcampAPI, {
	})
	.done(function( data ) {	
      $('section').html("<span id=" + "greeting" + ">" + data.response + "</span>");
      $('section').removeClass('hidden');
    })  
    .fail(function() {
      $('section').html("<span id=" + "error" + ">Sorry, server error!</span>");
      $('section').removeClass('hidden');      
    })
    .always(function(){
      $('section').append("<span id=" + "completed" + ">(Operation complete)</span>");
    });
    highlightName();
}