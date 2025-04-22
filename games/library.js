"use strict";
// save unused but functional code structures and code structures which can/could easily be modified to be used elsewhere






//// Key press event listeners for game1/snake as of 3:32PM, 4/19/2025

Snake.prototype.AddMovementListeners = function(gridSnakeLivesIn) {
    const self = this; // capture the Snake instance
    // declare direction variable
    let direction = "";

    let keyPresses = function() {}; // declare keypresses. ?

    window.addEventListener('keydown', keyDownListener, false); // set an event listener on the whole window

    // create listener for when keys are pressed
    function keyDownListener(event) {
        // set the key that was pressed to true. ?
        keyPresses[event.key] = true;

        // create array of the grid squares 
        const squares = Array.from(gridSnakeLivesIn.children);

        // find index in grid square array that has the snake's class name
        let index = squares.findIndex(square => square.querySelector("." + self.className));
        // in case of error getting the index
        if (index === -1) {
            // display error in the console
            console.error("Snake head not found in grid!");
            // exit
            return;
        }

        // if the key pressed is W or the up arrow
        if (event.key == 'w' || event.key == "ArrowUp") {
            // for a 10x10 grid
            // if the index can still move up a row
            if (index >= 10) {
                // select the new square
                const newSquare = squares[index - 10];
                // append the snake to the new square
                newSquare.appendChild(self.Snake); // move snake
            } else {
                // if the snake is at the top edge, warn in the console
                console.warn("Snake is at top edge and cannot move up");
            }
        }
        // if the key pressed is S or the arrow down
        else if (event.key == 's' || event.key == "ArrowDown") {
            // if the index can still move up a row
            if (index <= 89) {
                // select the new square
                const newSquare = squares[index + 10];
                // append the snake to the new square
                newSquare.appendChild(self.Snake); // move snake
            } else {
                // if the snake is at the top edge, warn in the console
                console.warn("Snake is at bottom edge and cannot move up");
            }
        }
        // if the key pressed is D or the arrow right
        else if (event.key == 'd' || event.key == "ArrowRight") {
            // if the index can still move up a row
            if (!((index+1)%10 == 0)) {
                // select the new square
                const newSquare = squares[index + 1];
                // append the snake to the new square
                newSquare.appendChild(self.Snake); // move snake
            } else {
                // if the snake is at the top edge, warn in the console
                console.warn("Snake is at right edge and cannot move up");
            }
        }
        else if (event.key == 'a' || event.key == "ArrowLeft") {
            // if the index can still move up a row
            if (!(index%10 == 0)) {
                // select the new square
                const newSquare = squares[index - 1];
                // append the snake to the new square
                newSquare.appendChild(self.Snake); // move snake
            } else {
                // if the snake is at the top edge, warn in the console
                console.warn("Snake is at left edge and cannot move up");
            }
        }
    }

    // Hear when key stops being pressed. Sets keyPresses to false.
    window.addEventListener('keyup', keyUpListener, false);
        function keyUpListener(event) {
        keyPresses[event.key] = false;
        //console.log("key up")
    }
}



/* old vers of uploading games in their boxes to the index: 
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
} */


/* Old code to create the snake block which moved one square in the grid on one key press. Didn't stay within borders
// create the snake
let snake = document.createElement("div")
snake.id = "head"

// set snake in the start square
blocks[45].className="snakeBlock";



// Declare a variable to hold an emtpy function. 
let keyPresses = function() {}

// add event listeners to use keypresses

window.addEventListener('keydown', keyDownListener, false)

// create event listener to  hear when a direction key is pressed
// Moves user 1 block in 1 direction on their 10x10 grid. Currently needs sideways directions edited
function keyDownListener(event) {   // AT SOME POINT, MY MOUSE PAD MOVED THE SQUARE? Need to find why and change it, although I can't even replicate to check.
    // Somehow gives the event parameter to the functino in keyPresses and returns the key.
    // Maybe this checks if the event was a key event! If it was, then it equals true. (Pure hypothesis. I do not know.)
    keyPresses[event.key] = true
    // verification: console.log("key down")
    // verification: console.log(`Key ${event.key} was pressed.`)

    // If the key pressed
    if (event.key == 'w' || event.key == "ArrowUp") {
        let index = blocks.indexOf(document.getElementsByClassName("snakeBlock")[0])
        console.log(`index 1: ${index}`)
        blocks[index].className = "block";
        index -= 10
        blocks[index].className = "snakeBlock";
        console.log(`index 2: ${index}`)
        console.log("Ran w/arrowup.")
    }
    else if (event.key == 's' || event.key == "ArrowDown") {
        let index = blocks.indexOf(document.getElementsByClassName("snakeBlock")[0])
        console.log(`index 1: ${index}`)
        blocks[index].className = "block";
        index += 10
        blocks[index].className = "snakeBlock";
        console.log(`index 2: ${index}`)
        console.log("Ran s/arrowdown.")
    }
    else if (event.key == 'd' || event.key == "ArrowRight") {
        let index = blocks.indexOf(document.getElementsByClassName("snakeBlock")[0])
        console.log(`index 1: ${index}`)
        blocks[index].className = "block";
        index += 1
        blocks[index].className = "snakeBlock";
        console.log(`index 2: ${index}`)
        console.log("Ran d/arrowright.")
    }
    else if (event.key == 'a' || event.key == "ArrowLeft") {
        let index = blocks.indexOf(document.getElementsByClassName("snakeBlock")[0])
        console.log(`index 1: ${index}`)
        blocks[index].className = "block";
        index -= 1
        blocks[index].className = "snakeBlock";
        console.log(`index 2: ${index}`)
        console.log("Ran a/arrowleft.")
    }
}
// Hear when key stops being pressed. Sets keyPresses to false.
window.addEventListener('keyup', keyUpListener, false);
    function keyUpListener(event) {
    keyPresses[event.key] = false;
    //console.log("key up")
} */