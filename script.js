// use strict validation
"use strict";

// Be sure to put it inside an if-page-name-contains-index. Or make separate scripts for all.

// Array to hold game names
let gameTitles = ["snake", "test1"];

// Array to hold game image sources(src)
let coverImages = ["img1", "aa"];

// Array to hold game links
let gamePages = ["games/game1.html", "test1"];


// variable holding the first gamesContainer
let gamesContainer = document.getElementsByClassName("gamesContainer")[0]

window.addEventListener("load", uploadGames(gameTitles,coverImages,gamePages))

// function to put each game in a div with the id gameBox within the gamesContainer
function uploadGames(titles, images, pagelinks) {   // parameters are: Array holding game title, array holding game cover images, and array holding game page links
    // check that each array is the same length
    let lengthCheck = Check3ArrayLengths(titles, images, pagelinks);
    // if they are different lengths
    if (lengthCheck === false) {
        // alert user of game information issues
        window.alert("Cannot load because some game information is missing or innacurate.");
        // exit the uploadGames function
        return;
    } // if they are all the same length, continue as normal

    

    // for-each loop to put each game in a gameBox in the grid
    for (let i = 0; i < titles.length; i++) {
        // make the div element
        let gameBox = document.createElement("div");
        // set the div class name to gameBox
        gameBox.className = "gameBox";


        // make the <p> to hold the title of the game box
        let title = document.createElement("p");
        // set it to the title
        title.innerText = gameTitles[i];
        
        // make the img element to hold the image
        let coverImage = document.createElement("img");
        // put the image in the image element (set the href to the image link)
        coverImage.src = coverImages[i]
        // set the image alt to "image not found"
        coverImage.alt = "image not available yet";

        // make the linking button element of the gameBox
        let link = document.createElement("a")
        // add the link in the button
        link.href = gamePages[i]
        // Name the link the same as the title
        link.innerText = title.innerText; // Make the link and the title the same eventually? EVENTUALLY make the WHOLE THING a link
        // set the button class to the style for the game link buttons


        // append the gamebox to the gamesContainer
        gamesContainer.appendChild(gameBox);
        
        // append the title, image, and button to the gamebox div
        gameBox.appendChild(title);
        gameBox.appendChild(coverImage);
        gameBox.appendChild(link);

        // Do I need more? I don't think so.
    }
}
/* catch {
    let test = document.createElement("p")
    test.innerHTML = "Not working yet" 
    gamesContainer.appendChild(test);
} */


// function to ensure all arrays are the same length. returns true if they are equal and false if they are not
function Check3ArrayLengths(titles, images, pagelinks) {
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


// gametype on mouse over events
let funGamesBtn = document.getElementsByClassName("gameType")[0]
let appsBtn = document.getElementsByClassName("gameType")[1]
let projectsBtn = document.getElementsByClassName("gameType")[2]

funGamesBtn.addEventListener("mouseover", (event) => {
    funGamesBtn.style.backgroundColor = "limegreen";
})
funGamesBtn.addEventListener("mouseout", (event) => {
    funGamesBtn.style.backgroundColor = "aqua";
})
appsBtn.addEventListener("mouseover", (event) => {
    appsBtn.style.backgroundColor = "limegreen";
})
appsBtn.addEventListener("mouseout", (event) => {
    appsBtn.style.backgroundColor = "aqua";
})
projectsBtn.addEventListener("mouseover", (event) => {
    projectsBtn.style.backgroundColor = "limegreen";
})
projectsBtn.addEventListener("mouseout", (event) => {
    projectsBtn.style.backgroundColor = "aqua";
})