"use strict"; // use strict js



/* There are two points over each other. I think this is my initial userLocat changing with the getPos, but there is a marker for both.
I also want them to say A and B on the map, matching the instructions. */















// Function to set up and display the map
function initMap() {
    // Page objects
    let displayMap = document.getElementById("mapWrap");    // the div the map itself will go in
    let routeBox = document.getElementById("routeBox");
    // Create a map to (location tbd), starting from the user's location
    let userLocat = {lat: 48.858, lng: 2.294};
    let destin = {lat: 48.858592421264056, lng:  2.2944383814619327} // Coordinate for paris

    // get device's current position
    navigator.geolocation.getCurrentPosition(getPos, handleError)

    

    // function to get current location of the user/computer the map is on
    function getPos(pos) { // Get YOUR current location! Your browser can do this for free. Doesn't cost for this api.
        userLocat = {  // set position variable
            lat: pos.coords.latitude,   // get latitude
            lng: pos.coords.longitude,   // get longitude
            // alt: pos.coords.altitude // get altitude
        }
    }
    // In case of geolocation error
    function handleError(err) {
        console.log("Geolocation error: " + err.message);   // log the error message?
    }



    // Declare variable to hold the map
    let myMap = new google.maps.Map(displayMap, {
        zoom: 17,   // set zoom
        center: userLocat,  // center on the user's location rather than paris
        fullscreenControl: false    // it will not take the full screen
    })

    // add a marker for the user location
    new google.maps.Marker({
        position: userLocat,    // it is positioned at the user's long and lat
        map: myMap, // it will be in my map div with my map's settings
        title: "You are Here!" // name it telling the user where they are
    })
    // Add a marker for the eifel tower destination
    new google.maps.Marker({
        position: destin,    // it is positioned at the eiffle tower's long and lat
        map: myMap, // it will be in my map div with my map's settings
        title: "I Fell Tower" // name it a pun on the locat's name
    })
    
    // set up direction service and rendering
    let routeFind = new google.maps.DirectionsService(); // make faster call to the find the routing function
    let routeDraw = new google.maps.DirectionsRenderer(); // make faster call to the find the draw the routing function
        
    // Walk >:] from current location
    let myRoute = {
        origin: userLocat,  // set origin to user's location
        destination: destin, // set destination to eiffle tower in paris
        travelMode: "WALKING"   // set travel mode to walking
    }

    // Generate directions for the route
    routeFind.route(myRoute, function(result, status) {
        if (status == "OK") {   // if no errors
            routeDraw.setDirections(result);    // set the directions
            routeDraw.setMap(myMap); // display route on the map
            routeDraw.setPanel(routeBox);// display directions in the routeBox element
        } else {
            // set the routeBox content
            routeBox.textContent = "Directions Unavailable"
        }
    });
}