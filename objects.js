"use strict";

// Create app class
class App {
    constructor(title, cover, page, description) {
        this.title = title
        this.cover = cover
        this.page = page
        this.description = description
    }
}

App.prototype.UploadApp = function (appContainerClassName, containerIndex, appBoxClass) {   // parameters are: Array holding game title, array holding game cover images, and array holding game page links
    // make the div element
    let appBox = document.createElement("div");
    // set the div class name to the individual app class name
    appBox.className = appBoxClass;

    // make the <p> to hold the title of the app
    let title = document.createElement("p");
    // set it to the title
    title.innerText = this.title;
        
    // make the img element to hold the cover image
    let cover = document.createElement("img");
    // put the image in the image element (set the href to the image link)
    cover.src = this.cover
    // set the image alt to "image not found"
    cover.alt = "image not available yet";

    // make the linking button element of the gameBox
    let page = document.createElement("a")
    // add the link in the button
    page.href = this.page;
    // Name the link the same as the title
    page.innerText = title.innerText; // Make the link and the title the same eventually? EVENTUALLY make the WHOLE THING a link
    // set the button class to the style for the game link buttons


    let description = document.createElement("p");
    description.innerText = this.description;
    // append the gamebox to the gamesContainer
    let appContainer = document.getElementsByClassName(appContainerClassName)[containerIndex];

    
        
    // append the title, image, and button to the gamebox div
    appBox.appendChild(title);
    appBox.appendChild(cover);
    appBox.appendChild(page); 
    appBox.appendChild(description);

    appContainer.appendChild(appBox);
}