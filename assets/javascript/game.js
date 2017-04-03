  var targetNumber = Math.floor((Math.random() * 120) + 12);

  $("#number-to-guess").text(targetNumber);

  var counter = 0;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  var numberOptions = [Math.floor((Math.random() * 40) + 1), Math.floor((Math.random() * 50) + 2), Math.floor((Math.random() * 50) + 2), Math.floor((Math.random() * 50) + 2)];

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var green = $("<img>");
    var blue = $("<img>");
    var purple = $("<img>"); 
    var yellow = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    green.addClass("crystal-image");
    blue.addClass("crystal-image");
    purple.addClass("crystal-image");    
    yellow.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    green.attr("src", "assets/images/green_crystal_100.png");
    blue.attr("src", "assets/images//blue_crystal_100.png");
    purple.attr("src", "assets/images/purple_crystal_100.png");
    yellow.attr("src", "assets/images/yellow_crystal_100.png");


    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    green.attr("data-crystalvalue", numberOptions[0]);
    blue.attr("data-crystalvalue", numberOptions[1]);
    purple.attr("data-crystalvalue", numberOptions[2]);
    yellow.attr("data-crystalvalue", numberOptions[3]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(green);
    $("#crystals").append(blue);
    $("#crystals").append(purple);
    $("#crystals").append(yellow);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });
