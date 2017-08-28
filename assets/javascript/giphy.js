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

            var humor = ["spongebob", "surprise", "karate fails"];

            showButtons();

            function showButtons() {

                // $(".gifButtons").empty();

                for (var i = 0; i < humor.length; i++) {

                    var a = $("<button>");
                    a.addClass("humor");
                    // the attribute is not being applied  to the buttons as seen in the console

                    a.attr("data-name");
                    a.text(humor[i]);
                    $(".gifButtons").append(a);

                }

            }


            $("button").on("click", function(event) { 
            	event.preventDefault();

                var humor = $(this).attr("data-name");
            // });
               


            var queryURL = "https://api.giphy.com/v1/gifs/search?q="+humor+"&api_key=eb8e89c091bd409eb627bb0b7594c298&limit=10";
            console.log(queryURL);

            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function(response) {
                console.log(response);
            // });
            	var results = response.data;

            for (i = 0; i<results.length; i++){
                $(".gifImages").append("<img src = ' " + response.data[i].images.fixed_height.url + " '>");
                $("img").addClass("gif");

                $(".gifImages").append("<p>Rating: " + response.data[i].rating);
            };
           });
	     });
             
            $(".gif").on("click", function() {

            	var state = $(this).attr("data-state");
            	if (state === "still") {
            		$(this).attr("src", $(this).attr("data-animate"));
            		$(this).attr("data-state", "animate");            	
            	} else {
            		$(this).attr("src", $(this).attr("data-still"));
            		$(this).attr("data-state", "still");
            	}


          

            });

        });