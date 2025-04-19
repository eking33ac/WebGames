// Make it save score to local storage
// Add score tracker and saver
// On reload, it goes to local storage and retrieves largest scores to display
// Can change size of board

"use strict";

console.log("Linked.")

// get container to hold the game
const game = document.getElementById("gameContainer");

// get grid to play the game in
const field = new GridField("field");
field.Create("div",0,game);

// Create the snake
let snake = new Snake("snakeBody")

snake.Create("div", field.GridField);




/*
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