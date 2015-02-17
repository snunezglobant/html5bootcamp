// Exercise 5
$("document").ready(function() {
  $(".hidden").fadeIn("slow", function() {
    // Exercise 6
    $(".alias").focus();
  });

  // Exercise 7
  $("#greet-bt").click(greet);
  $(".alias").keydown(function(event) {
    if (event.which === 13) { // Enter pressed
      greet();
    } 
  });

  // Exercise 12
  $(".search-album-bt").click(function() {
    searchAlbum();
  });
  $(".search-album-text").keydown(function(event) {
    if (event.which === 13) { // Enter pressed
      searchAlbum();
    }
  });

  $(".album-container").on("mouseenter", ".album-info > p", function() {
    if (this.scrollWidth > this.offsetWidth) {
      $(this).attr("title", $(this).text());
    }
    else {
      $(event.target).removeAttr("title");
    }
  });
});

function greet() {
  var jsonResponse = $.getJSON("http://bootcamp.aws.af.cm/welcome/" + $(".alias").val());
  /* disable input while request is being processed, re enable when response is received */
  $(".alias").prop("disabled", true);
  $("#greet-bt").prop("disabled", true);

  jsonResponse.always(function() {
    $(".alias").prop("disabled", false);
    $("#greet-bt").prop("disabled", false);
  });

  // Exercise 8
  jsonResponse.done(function(json) {
    $(".welcome").html("<p>"+json.response+"</p>");

    // Exercise 10
    highlightName();
    console.log(json);
  });

  // Exercise 9
  jsonResponse.fail(function() {
    $(".welcome").html("<p style=\"color: red;\">Error</p>");
  });
}

function highlightName() {
  var name = $(".alias").val();
  var newStr = $(".welcome").html().replace(name, "<span style=\"color: #66f;\">"+name+"</span>");
  $(".welcome").html(newStr);
}

/* Exercise 11, 12 */

function searchAlbum(url) {
  var jsonResponse;
  
  if (url === undefined) {
    jsonResponse = $.getJSON("https://api.spotify.com/v1/search", {q: $(".search-album-text").val(), type: "album"});
  }
  else {
    jsonResponse = $.getJSON(url);
  }
  $("[class^=search-album]").prop("disabled", true);

  jsonResponse.done(function(json) {
    var albumList = {albums: [], first: 0, last: 0, total: 0, previous: null, next: null};
    
    if (json.albums.items.length === 0) {
      $("[class^=search-album]").prop("disabled", false);
    
      $(".album-container > *").remove();
      $(".album-container").append(
        "<span style=\"color: red;\">No results found.</span>"
      );
    }
    else {
      albumList.first = json.albums.offset + 1;
      albumList.last = json.albums.offset + json.albums.items.length;
      albumList.total = json.albums.total;
      albumList.previous = json.albums.previous;
      albumList.next = json.albums.next;

      for (var i = 0; i < json.albums.items.length; i++) {
        var albumImage;

        if (json.albums.items[i].images.length === 0) {
          albumImage = null;
        }
        else {
          albumImage = json.albums.items[i].images[json.albums.items[i].images.length - 1].url; /* higher index -> samaller image. probably ~ 64x64 px */
        }
        albumList.albums.push({
          name: json.albums.items[i].name,
          type: json.albums.items[i].album_type,
          imageUrl: albumImage,
          spotifyLink: json.albums.items[i].external_urls.spotify,
          href: json.albums.items[i].href
          });  
      }

      console.log(json);
      getAlbumsDetails(albumList);
    }
  });

  jsonResponse.fail(function() {
    $("[class^=search-album]").prop("disabled", false);
  
    $(".album-container > *").remove();
    $(".album-container").append(
      "<span style=\"color: red;\">An error occurred while attempting to connect to the server.</span>"
    );
  });
}

function getAlbumsDetails(albumList) {
  for (var i = 0; i < albumList.albums.length; i++) {
    var albumIndex = 0;
    var jsonResponse = $.getJSON(albumList.albums[i].href);

    jsonResponse.done(function(json) {
      var artistList = [];
      for (var i = 0; i < json.artists.length; i++) {
        artistList.push(json.artists[i].name);
      }
      albumList.albums[albumIndex].releaseDate = json.release_date;
      albumList.albums[albumIndex].artist = artistList.join(", ");
      albumIndex++;
    });

    jsonResponse.fail(function() {
      albumList.albums[albumIndex].releaseDate = "<span style=\"color: red;\">An error occurred while attempting to connect to the server.</span>";
    });
  }

  // last iteration
  jsonResponse.always(function() {
      $("[class^=search-album]").prop("disabled", false);
      showAlbumsInfo(albumList);
  });
}

function showAlbumsInfo(albumList) {
  console.log(albumList);

  /* remove existing list (if there is one) */
  $(".album-container > *").remove();

  /* populate list */
  for (var i = 0; i < albumList.albums.length; i++) {
    $(".album-container").append(
      "<article class=\"album-info\">"+
        "<div class=\"image-container\"></div>"+
        "<p>Name: "+albumList.albums[i].name+" - Artist: "+albumList.albums[i].artist+"</p>"+
        //"<p>Artist: "+albumList.albums[i].artist+"</p>"+
        "<p>Type: "+albumList.albums[i].type+" - Release date: "+albumList.albums[i].releaseDate+"</p>"+
        //"<p>Release date: "+albumList.albums[i].releaseDate+"</p>"+
        "<p><a href=\""+albumList.albums[i].spotifyLink+"\">Spotify</a></p>"+
      "</article>"
    );

    if (albumList.albums[i].imageUrl !== null) {
      $(".album-info:last-child > .image-container").append(
        "<img src=\""+albumList.albums[i].imageUrl+"\" alt=\"Album cover\">"
      );
    }
    else {
      $(".album-info:last-child > .image-container").append("No<br>image");
    }
  }

  $(".album-container").append(
    "<nav>"+
      "<p>Showing albums "+albumList.first+" to "+albumList.last+" of "+albumList.total+"</p>"+
      "<button type=\"button\" class=\"prev\">Previous page</button>"+
      "<button type=\"button\" class=\"next\">Next page</button>"+
    "</nav>"
  );
  if (albumList.previous === null) {
    $(".album-container .prev").prop("disabled", true);
  }
  else {
    $(".album-container .prev").click(function() {
      searchAlbum(albumList.previous);
      // window.scroll(0, 0);
      $("body").animate({scrollTop: 0}, 600);
    });
  }
  if (albumList.next === null) {
    $(".album-container .next").prop("disabled", true);
  }
  else {
    $(".album-container .next").click(function() {
      searchAlbum(albumList.next);
      // window.scroll(0, 0);
      $("body").animate({scrollTop: 0}, 600);
    });
  }
}
