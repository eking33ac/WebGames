"use strict";

// create lists which will be the same for each page
// create header name constant
const headerName = "Student Makes Games"
// create header link constant
const headerLink = "index.html"
// create header id/class constant
const headerId = "siteHead"
// create navigation id/class constant
const navId = "siteNav"
// create navigation name constant
const navNames = ["Home", "Games", "Apps", "Projects", "About"]
// create navigation link constant
const navLinks = ["index.html", "games.html", "apps.html", "projects.html", "about.html"]
// create footer link names constant
const footNames = ["Home", "Games", "Apps", "Projects", "About"]
// create footer links constant
const footLinks = ["index.html", "games.html", "apps.html", "projects.html", "about.html"]
// create variable to hold json app text
let jsonAppText = "";


// If the page is/includes games.html
if (document.URL.includes("games.html")) {
    // create json HTML
    jsonAppText = `[
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

    // create page object
    const gamesPage = new AppPage("game", headerName, headerLink, headerId, navNames, navLinks, navId, footLinks, footNames, "", jsonAppText);
    // Fill out the whole page
    gamesPage.Configure("gamesContainer", 0, "gameBox");
}

// if the page is/includes apps.html
if (document.URL.includes("apps.html")) {
    // create json HTML
    jsonAppText = `[
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
        }
    ]`

    // create page object
    const appsPage = new AppPage("useApp", headerName, headerLink, headerId, navNames, navLinks, navId, footLinks, footNames, "", jsonAppText)
    // Fill out the whole page
    appsPage.Configure("gamesContainer", 0, "gameBox");
}

// if the page is/includes projects.html
/* if (document.URL.includes("projects.html")) {
    // create json HTML
    jsonAppText = `[
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
    ]`

    // create page object
    const projectsPage = new AppPage("project", headerName, headerLink, headerId, navNames, navLinks, navId, footLinks, footNames, "", jsonAppText)
    // Fill out the whole page
    projectsPage.Configure("gamesContainer", 0, "gameBox");
}*/