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
    let title = document.createElement("h4");
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
    
    // make paragraph to hold app description
    let description = document.createElement("p");
    // set the description text to the text of the App object
    description.innerText = this.description;

    // append the title, image, and button to the gamebox div
    appBox.appendChild(title);
    appBox.appendChild(cover);
    appBox.appendChild(page); 
    appBox.appendChild(description);

    // set the app container to be the element with the container class name at specified index
    let appContainer = document.getElementsByClassName(appContainerClassName)[containerIndex];
    // if the appContainer is truthy (not undefined)
    if (appContainer) {
        // append the app box to the app container
        appContainer.appendChild(appBox);
    }
    // if the app container at that index does not exist
    else {
        // create an app containeer
        appContainer = document.createElement("div");
        // set it's class name
        appContainer.className = appContainerClassName;
        // append it to the main
        document.getElementsByTagName("main")[0].appendChild(appContainer)
        // append the app box to the app container
        appContainer.appendChild(appBox);
        // warn the programmer that, if they are uploading many apps, this will happen until they have an element with the class name at the specified index
        console.warn(`The class at the index named did not exist, so a new div element with that class name was created.\nIf creating many elements, this may continue until there is an element with the class at the specified index.`)
    }
}

// Create AppPage Class.
class AppPage {
    // This can absolutely be a child of simply a 'page' class. Things like header, nav, and footer would carry over.
    // Only thing in the body right now is the apps.
    constructor(appType, headerName, headerLink, headerID, navNameList, navLinkList, navID, footerLinkList, footerNameList, footerLinkClass, jsonAppText) {
        // Is it good practice to put all this information in the constructor rather than ask for it in the prototype?
        // In my snake game wip, I thought it would have been useful to have access to some info from the object rather than fetching results between methods
        // However, This may be a LOT to keep track of and leader to errors.
        this.appType = appType;
        this.headerName = headerName;
        this.headerLink = headerLink;
        this.headerID = headerID;
        this.navLinkList = navLinkList;
        this.navNameList = navNameList;
        this.navID = navID;
        this.footerLinkList = footerLinkList;
        this.footerNameList = footerNameList;
        this.footerLinkClass = footerLinkClass;
        this.jsonAppText = jsonAppText;
    }
}

// Method to create everything within the body
AppPage.prototype.Configure = function(appContainer, appContainerIndex, appContainerClassName) {
    // Create self variable to hold this.AppPage.
    const self = this; // 'this.AppPage' is undefined, but just 'this' is fine.
    // Declare variables to hold header, nav, main, and footer elements/nodes
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
    //  create variable to hold the apps HTML
    let appsList = [];
    // declare counter variable
    let counter = 0;

    // function to ceate the header HTML (functions put after the call aren't yet initialized. Thought that was fine, but maybe not.)
    let createHeaderHTML = function() {
        // create variable to use this header link and this header name to create the header
        let headerHTML = `<header><a href="${self.headerLink}">${self.headerName}</a></header>`
        // return header HTML
        return headerHTML;
    }

    // function to create the navigation HTML
    const createNavHTML = function() {
        // create variable to hold navigation html
        let navHTML = "";
        // set counter variable
        counter = 0;
        // for each nav link (maybe make the nav names and links a dictionary/object itself later on?)
        for (let link of self.navLinkList) {
            // Append the nav link + the name within nav tags
            navHTML += `<a href="${link}">${self.navNameList[counter]}</a>`
            // increment the counter
            counter++
        }
        // return the html
        return navHTML;
    }

    // function to create the navigation HTML
    const createFooterHTML = function() {
        // create variable to hold footer html
        let footerHTML = "";
        // set counter variable
        counter = 0
        // create nav and unordered list opening tags
        footerHTML += "<nav><ul>"

        // for each footer link (maybe make the footer names and links a dictionary/object itself later on?)
        for (let link in self.footerLinkList) {
            // Append the footer link + the name within list item and anchor tags
            footerHTML += `<li><a href="${link}">${self.footerNameList[counter]}</a></li>`
            // increment the counter
            counter++
        }
        // add unordered list and nav closing tags
        footerHTML += "</nav></ul>"

        // return the html
        return footerHTML;
    }
    

    // create the main html
    const createMainHTML = function() {
        // leave this as a reminder to make the page prettier and add mroe content later on
        return "more to be added later";
    }

    // function to convert json text into usable json apps and upload the apps
    let createAppsList = function() {
        // Parse the json into an object of objects for us to further chop up
        const apps = JSON.parse(self.jsonAppText);
        // create new apps array to put NAMED App objects in
        let appsArr = [];
        // for each object in the apps object
        for ( let i = 0; i < apps.length; i++) {
            // create the name of the object
            const name = self.appType + (i + 1);
            // use the created name as their object/variable name and set the app's App data to the same as this index of apps
            window[name] = new App(apps[i].title, apps[i].cover, apps[i].page, apps[i].description);
            // push the new app object to the apps array
            appsArr.push(window[name]);
        }
        // set variable to hold list of objects from the json text
        return appsArr;
    }

    // create list of apps
    appsList = createAppsList();
    // create header innerHTML
    header.innerHTML = createHeaderHTML();
    // set header class/id
    header.id = self.headerID;
    // create navigation innerHTML
    nav.innerHTML = createNavHTML();
    // set navigation id/class
    nav.id = self.navID;
    // create main innerHTML
    main.innerHTML = createMainHTML();
    // create footer innerHTML
    footer.innerHTML = createFooterHTML();

    // Append header, nav, main, and footer to the document.body
    document.body.appendChild(header);
    document.body.appendChild(nav);
    document.body.appendChild(main);
    document.body.appendChild(footer);

    // for each app in the app list
    for (let i = 0; i < appsList.length; i++) {
        // can automate/organize more later.
        // upload the apps to the container
        appsList[i].UploadApp(appContainer, appContainerIndex, appContainerClassName);
    }
}