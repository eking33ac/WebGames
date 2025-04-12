// Array to hold game names
let gameTitles = [];

// Array to hold game image sources(src)
let coverImages = [];

// Array to hold game links
let gamePages = [];


// variable holding the first gamesContainer
let gamesContainer = document.getElementsByClassName("gamesContainer")[0]

// function to put each game in a div with the id gameBox within the gamesContainer
function uploadGames(titles, images, pagelinks) {   // parameters are: Array holding game title, array holding game cover images, and array holding game page links
    // check that each array is the same length
    let lengthCheck = CheckArrayLengths;
    // if they are different lengths
    if (lengthCheck === false) {
        // alert user of game information issues
        window.alert("Cannot load because some game information is missing or innacurate.")
        // exit the uploadGames function
        return;
    } // if they are all the same length, continue as normal

    // for-each loop to put each game in a gameBox in the grid
    for (let game = 0; game < titles.length; game++) {
        // make the div element
        // set the div class name to gameBox

        // make the <p> to hold the title of the game box
        // set it to the title
        
        // make the img element to hold the image
        // put the image in the image element (set the href to the image link)
        // set the image alt to "image not found"

        // make the button element of the gameBox
        // add the link in the button
        // append the button to the gamebox div

        // Do I need more? I don't think so.
    }
}

// function to ensure all arrays are the same length. returns true if they are equal and false if they are not
function CheckArrayLengths() {
    // check that each array is the same length
    // if everything is the same length, log that it is so and we are good
    if (titles.length == images.length && images.length == pagelinks.length) {
        console.log("All game arrays the same size.");
        return true;
    } else { // if things are different in length, log each difference so we know what to fix
        // titles vs images
        if (titles.length > images.length) {    // check if there are more titles than images
            console.log("Game image array is shorter than game title array.")
        } else if (titles.length < images.length) { // check if there are more images than titles
            console.log("Game titles array is shorter than game images array.")
        }
        // titles vs page links
        if (titles.length > pagelink.length) { // check if there are more titles than page links
            console.log("Game-page link array is shorter than game title array.")
        } else if (titles.length < pagelink.length) { // check if there are more page links than titles
            console.log("Game titles array is shorter than game-page link array.") 
        }
        // images vs page links
        if (images.length > pagelink.length) { // check if there are more images than page links
            console.log("Game-page link array is shorter than game images array.")
        } else if (images.length < pagelink.length) { // check if there are more page links than images
            console.log("Game images array is shorter than game-page link array.") 
        }
        return false;
    }
}