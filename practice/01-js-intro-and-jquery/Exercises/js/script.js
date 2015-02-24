$(document).ready( function() {
  $('section').fadeIn('slow', function() {
    $('.alias').focus();
  });
  $('#submit').click(getResponse);
  $('#search').click(getAlbums);
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
      $('section').html("<span class=\"error\">Sorry, server error!</span>");
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

//Exercise 11 - 12

function getAlbums(){
  var $artist = $('.artist').val();
  var spotifyAPI = "https://api.spotify.com/v1/search";
  var searchQuery = {q:$artist, type:'album'};
  
  $.getJSON (spotifyAPI, searchQuery)
  .done(function( data ) {
    console.log(data);
    var albums = [];
    //Here I'm saving each album in my array 'albums'
    for (var i = 0 ; i < data.albums.items.length; i++) {
      albums.push(data.albums.items[i]);
    };
    //Here I'm showing each album in the page
    for(var i = 0; i < albums.length; i++){
      
      var img_url = albums[i].images[0].url;
      var relDate = albums[i].release_date;
      var type = albums[i].album_type;
      var albumName = albums[i].name;
      var stfyURL = albums[i].uri;
      
      $('#content').append("<div class=\"album-data\"></div>");

      $('.album-data').append("<img class=\"album_img\" src=" + img_url + " alt=\"Album Image\" width=\"160\" height=\"160\">");
      $('.album-data').append("<div class=\"albumName\">" + "Album Name: " + albumName + "</div>");
      $('.album-data').append("<div class=\"release_date\">" + "Release Date: " + relDate + "</div>");
      $('.album-data').append("<div class=\"album_type\">" + "Type: " + type + "</div>");
      $('.album-data').append("<div class=\"spotify_url\">" + "Spotify URL: " + stfyURL + "</div>");
      
    };

  })
  .fail(function() {
    $('.albums-container').append("<span class=\"error\">Sorry, an error ocurred!</span>");
  })
  
}