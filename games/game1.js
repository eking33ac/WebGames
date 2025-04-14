"use strict";

console.log("Linked.")

// get container to hold the game
let game = document.getElementById("gameContainer");

// get grid to play the game in
let field = document.getElementById("field")


// create 100 divs to go inside the grid
//create array to hold all blocks
let blocks = [];
// create blocks/tiles
for (let i=0; i<100; i++) {
    let block = document.createElement("div")
    block.className = "block";
    // add block to array
    blocks.push(block);
    // add block to the field
    field.appendChild(block);
    console.log("blocked");
}

console.log(blocks)

// create the snake
let snake = document.createElement("div")
snake.id = "head"

// set snake in the start square
blocks[45].className="snakeBlock";

// add event listeners to use keypresses





// Declare a variable to hold an emtpy function. When 
let keyPresses = function() {}


window.addEventListener('keydown', keyDownListener, false)

// create event listener to  hear when a direction key is pressed
// Moves user 1 block in 1 direction on their 10x10 grid. Currently needs sideways directions edited
function keyDownListener(event) {   // AT SOME POINT, MY MOUSE PAD MOVED THE SQUARE? Need to find why and change it, although I can't even replicate to check.
    // Somehow gives the event parameter to the functino in keyPresses and returns the key.
    // Maybe this checks if the event was a key event! If it was, then it equals true. (Pure hypothesis. I do not know.)
    keyPresses[event.key] = true
    // verification: console.log("key down")
    // verification: console.log(`Key ${event.key} was pressed.`)

    // If the key pressed is
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
        console.log("Ran s/arrowright.")
    }
    else if (event.key == 'a' || event.key == "ArrowLeft") {
        let index = blocks.indexOf(document.getElementsByClassName("snakeBlock")[0])
        console.log(`index 1: ${index}`)
        blocks[index].className = "block";
        index -= 1
        blocks[index].className = "snakeBlock";
        console.log(`index 2: ${index}`)
        console.log("Ran s/arrowleft.")
    }
}
// Hear when key stops being pressed. Sets keyPresses to false.
window.addEventListener('keyup', keyUpListener, false);
    function keyUpListener(event) {
    keyPresses[event.key] = false;
    console.log("key up")
}