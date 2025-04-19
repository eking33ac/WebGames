// Create game field object
// create snake object

"use strict";

// Create field class
class GridField {
    // constructor
    constructor(id) {
        // set id field
        this.id=id;
    }
}

GridField.prototype.Create = function (elementType, nodeIndex = 0, appendToNode = document.body) {
    // create the div element
    this.GridField = document.createElement(elementType);
    // give the grid this ID
    this.GridField.id = this.id;
    // set default size
    this.SetSize(10,"block");
    // append to the appendToNode

    // if the element has no children
    if (appendToNode.childElementCount == 0) {
        // append without using children[nodeIndex]
        appendToNode.appendChild(this.GridField);
    }
    // otherwise, append in correct location via nodeIndex
    else {
        appendToNode.children[nodeIndex].appendChild(this.GridField);
    }
}

GridField.prototype.SetSize = function(sideLength, gridSquareClass) {
    // if it has squares already, reset to 0


    // square the side length to get the number of grid squares
    const size = sideLength ** 2;
    // make squares until it is the right size
    for (let i=0; i<size; i++) {
        // create new div to hold each square
        let square = document.createElement("div")
        // give the square the class name
        square.className = gridSquareClass;
        // add block to the grid
        this.GridField.appendChild(square);
        // verify
        //console.log("blocked" + [i]);
    }
}



class Snake {
    constructor(className) {
        this.className = className;
    }
}

Snake.prototype.Create = function(elementType = "div", gridSnakeLivesIn) {
    // create the snake block
    this.Snake = document.createElement(elementType);
    this.Snake.className = this.className;

    // Find the 46th square (index 45)
    const targetSquare = gridSnakeLivesIn.children[45];
    if (targetSquare) {
        targetSquare.appendChild(this.Snake);
        console.log("appended snake");
    } else {
        console.error("Grid square 45 not found.");
    }
    this.AddMovementListeners(gridSnakeLivesIn);
}

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





    // functions to move in a direction
    function snakeMoves() {
        if (direction = "up") {
            
        }
        if (direction = "down") {

        }
        if (direction = "left") {

        }
        if (direction = "right") {

        }
    }
};