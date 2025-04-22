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