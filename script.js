// use strict validation
"use strict";

// Be sure to put it inside an if-page-name-contains-index. Or make separate scripts for all.
if (document.URL.includes("index.html")) {
    // appType on mouse over events
    // create variables to hold each game type link (button) on the home page.
    let funGamesBtn = document.getElementsByClassName("appType")[0]
    let appsBtn = document.getElementsByClassName("appType")[1]
    let projectsBtn = document.getElementsByClassName("appType")[2]
    // create array of all game type buttons
    let appTypeArr = [funGamesBtn, appsBtn, projectsBtn];

    // for each game type button of the array
    for (let button of appTypeArr) {
        // add mouseover event listener to each button
        button.addEventListener("mouseover", (event) => {
            // changing the color on mouse over so it is more obvious they are buttons
            button.style.backgroundColor = "limegreen";
        })
        // add mouseout event listener to each button
        button.addEventListener("mouseout", (event) => {
            // changing the color on mouse out back to normal button color
            button.style.backgroundColor = "aqua";
        })
    }


    //import data from "./games/gameApps.json" assert { type: "json" };
    // Copy game icon json over for the game App objects
    let jsonGamesText = 
    // Include game, app, and project json. Will update names of variables later.
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
        },
            {
            "title": "useApp1",
            "cover": "cover1.png",
            "page": "apps/app1.html",
            "description": "desc1"
        },
        {
            "title": "useApp2",
            "cover": "cover2.png",
            "page": "apps/app2.html",
            "description": "desc2"
        },
        {
            "title": "project1",
            "cover": "cover1.png",
            "page": "projects/project1.html",
            "description": "desc1"
        },
        {
            "title": "project2",
            "cover": "cover2.png",
            "page": "projects/project2.html",
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

}