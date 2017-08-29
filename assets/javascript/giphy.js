$(document).ready(function() {

    // Api Key: eb8e89c091bd409eb627bb0b7594c298



    var humor = ["spongebob", "surprise", "karate fails"];

    showButtons();

    function showButtons() {

        // $(".gifButtons").empty();

        for (var i = 0; i < humor.length; i++) {

            var a = $("<button>");
            a.addClass("newGif");
            a.attr("data-name", humor[i]);
            a.text(humor[i]);
            $(".gifButtons").append(a);

        }

    }


    $("button").on("click", function(event) {
        event.preventDefault();

        var humor = $(this).attr("data-name");
        // });



        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + humor + "&api_key=eb8e89c091bd409eb627bb0b7594c298&limit=10";
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            console.log(response);
            // })   ;
            var results = response.data;
            $(".gifImages").empty();
            for (i = 0; i < results.length; i++) {
                $(".gifImages").prepend("<img src = ' " + response.data[i].images.fixed_height.url + " '>");
                $("img").addClass("gif");

                $(".gifImages").prepend("<p>Rating: " + response.data[i].rating);
            };
        });
    });

    // search for new gif form input
    $("#add-gif").on("click", function(event) {

        event.preventDefault();
        var newGif = $("#search-input").val().trim();
        humor.push(newGif);
        // this part not working quite right.When a user types in a search in the search field,it does create a new button,but ends up duplicating all of the other buttons too..
        // Tried to use $("#search-input").empty();
        showButtons();


    });


    // Not able to get this code to work either..
    // 
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