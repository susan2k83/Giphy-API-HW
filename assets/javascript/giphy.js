$(document).ready(function() {

// Api Key: eb8e89c091bd409eb627bb0b7594c298

// page loads with a row of buttoms already at the top

// these buttons are made in jquery

// on click one the buttons

// the screen populates with 10 still gifs

// the rating is located below the image

// on click the gif, the gif animates

// click again, the gif is still

// click a different gif, the current screen of gifs goes away
// and the new gifs appear...

var humor = ["Spongebob", "Karate Fails", "Surprise"];

renderButtons();

function renderButtons() {

	$(".gifButton").empty();

	for(var i = 0; i < humor.length; i++) {

		 var a = $("<button>");
		 a.addClass("gif");
		 a.attr("data-name", humor[i]);
		 a.text(humor[i]);
		 $("gifButton").append(a);

	}

}


$("button").on("click", function(){

	var humor = $(this).data("search");
});
 


var queryURL = "https://api.giphy.com/v1/gifs/search?q="+humor+"api_key=eb8e89c091bd409eb627bb0b7594c298&limit=10";
console.log(queryURL);

$.ajax({
	url:queryURL,
	method:"GET"
}).done(function(response) {
	console.log(response);
});












	});