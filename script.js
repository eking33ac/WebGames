// use strict validation
"use strict";

// Be sure to put it inside an if-page-name-contains-index. Or make separate scripts for all.

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


//import data from "./games/gameApps.json" assert { type: "json" };
// Copy game icon json over for the game App objects
let jsonGamesText = 
`[
    {
        "title": "Snake",
        "cover": "cover1.png",
        "page": "games/game1.html",
        "description": "desc1"
    },
    {
        "title": "game2",
        "cover": "cover2.png",
        "page": "anothergame.html",
        "description": "desc2"
    }
]`;
// Parse the json into an object of objects for us to further chop up
const games = JSON.parse(jsonGamesText);
// create new games array to put NAMED App objects in
let gamesArr = [];
// for each object in the games object
for ( let i = 0; i < games.length; i++) {
    // create the name of the object
    const name = "game" + (i + 1)
    // use the created name as their object/variable name and set the game App data to the same as this index of games
    window[name] = new App(games[i].title, games[i].cover, games[i].page, games[i].description)
    // push the new app object to the gamesArray
    gamesArr.push(window[name]);
}
// for each item in the games array
for (let i = 0; i < gamesArr.length; i++) {
    // upload the app to the game container
    gamesArr[i].UploadApp("gamesContainer", 0, "gameBox");
}

/* old vers: 
 for (let game of games) {
    let gameBox = document.createElement("div")
    gameBox.className = "gameBox";
    // set the div class name to gameBox
    gameBox.className = "gameBox";

    // make the <p> to hold the title of the game box
    let title = document.createElement("p");
    // set it to the title
    title.innerText = game.title;
        
    // make the img element to hold the image
    let cover = document.createElement("img");
    // put the image in the image element (set the href to the image link)
    cover.src = game.cover
    // set the image alt to "image not found"
    cover.alt = "image not available yet";

    // make the linking button element of the gameBox
    let page = document.createElement("a")
    // add the link in the button
    page.href = game.page;
    // Name the link the same as the title
    page.innerText = title.innerText; // Make the link and the title the same eventually? EVENTUALLY make the WHOLE THING a link
    // set the button class to the style for the game link buttons


    let description = document.createElement("p");
    description.innerText = game.description;
    // append the gamebox to the gamesContainer
    gamesContainer.appendChild(gameBox);
        
    // append the title, image, and button to the gamebox div
    gameBox.appendChild(title);
    gameBox.appendChild(cover);
    gameBox.appendChild(page); 
    gameBox.appendChild(description);
}  */