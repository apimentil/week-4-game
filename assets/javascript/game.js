  var targetNumber = Math.floor((Math.random() * 120) + 64);

  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var wins = 0;
  var losses = 0; 

  // $("#globalcounter").text(counter);

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  var numberOptions = [Math.floor((Math.random() * 30) + 1), Math.floor((Math.random() * 30) + 1), Math.floor((Math.random() * 30) + 1), Math.floor((Math.random() * 30) + 1)];

  var green = $("<img>");
  var blue = $("<img>");
  var purple = $("<img>"); 
  var yellow = $("<img>");

  // Next we create a for loop to create crystals for every numberOption.
  // var i = 0; i < numberOptions.length; i++

    // Give each crystal a class ".crystal-image".
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
    green.attr("data-crystalValue", numberOptions[0]);
    blue.attr("data-crystalValue", numberOptions[1]);
    purple.attr("data-crystalValue", numberOptions[2]);
    yellow.attr("data-crystalValue", numberOptions[3]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(green);
    $("#crystals").append(blue);
    $("#crystals").append(purple);
    $("#crystals").append(yellow);


  // Click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    // Add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#counter").text(counter);

    if (counter === targetNumber) {
      alert("You win!");
       $("#win-counter").text(wins + 1);
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    
    
    $("#lifeDrain").show();

    }


  });
