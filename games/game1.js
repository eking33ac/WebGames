console.log("Linked.")

// get container to hold the game
let game = document.getElementById("gameContainer");

// get grid to play the game in
let field = document.getElementById("field")


// create 100 divs to go inside the grid
//create array to hold all blocks
let blocks = [];
// create blocks/tiles
for ( i=0; i<100; i++) {
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




let keyPresses = {}

window.addEventListener('keydown', keyDownListener, false)
function keyDownListener(event) {
    keyPresses[event.key] = true
    console.log("key down")
    console.log(`Key ${event.key} was pressed.`)


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

window.addEventListener('keyup', keyUpListener, false);
    function keyUpListener(event) {
    keyPresses[event.key] = false;
    console.log("key up")
}