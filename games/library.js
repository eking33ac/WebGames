"use strict";


//// Key press event listeners for game1/snake as of 1:13PM, 4/13/2025

// Declare a variable to hold an emtpy function. When 
let keyPresses = function() {}


window.addEventListener('keydown', keyDownListener, false)

// create event listener to  hear when a direction key is pressed
// Moves user 1 block in 1 direction on their 10x10 grid. Currently needs sideways directions edited
function keyDownListener(event) {   // AT SOME POINT, MY MOUSE PAD MOVED THE SQUARE? Need to find why and change it, although I can't even replicate to check.
    //
    keyPresses[event.key] = true
    // verification: console.log("key down")
    // verification: console.log(`Key ${event.key} was pressed.`)

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