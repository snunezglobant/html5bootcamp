$(document).ready( function() {
  $('section').fadeIn('slow', function() {
    $('.alias').focus();
  });
  $('#submit').click(getResponse);
  //get spotify api response
});

function getResponse(){
  var name = $('.alias').val();
	var bootcampAPI = "http://bootcamp.aws.af.cm/welcome/" + name;
	$.getJSON (bootcampAPI, {
	})
	.done(function( data ) {	
      var strResponse = data.response;      
      $('section').html("<span id=\"greeting\">" + strResponse + "</span>");
      highlightName();
    })  
    .fail(function() {
      $('section').html("<span id=\"error\">Sorry, server error!</span>");
    })
    .always(function(){
      $('section').removeClass('hidden');
      $('section').append("<span id=\"completed\">(Operation complete)</span>");
    });
}

function highlightName(){
  var name = $('.alias').val();
  var highlighted = $('#greeting').html().replace(name, "<span class=\"highlighted\">" + name + "</span>");
  $('#greeting').html(highlighted);
}

//spotify api response