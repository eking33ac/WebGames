"use strict";


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