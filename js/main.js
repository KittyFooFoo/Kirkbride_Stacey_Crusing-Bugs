console.log("Javascript is connected");

//variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");
const puzzlePieceDiv = document.querySelector(".puzzle-pieces")
let draggedPiece;

//functions
function changeBGImage(event) {
    //console.log("changeBGimage called");
    //Method 1
    //console.log(this.id);
    //background-image: url('../images/backGround0.jpg');
    puzzleBoard.style.backgroundImage = `url('images/backGround${this.id}.jpg')`;
    let currentid = this.id;
resetPuzzle();
    //fix goes here

    //puzzlePieces.forEach(piece => puzzlePieceDiv (appendchild))

    //Method 2
    console.log(event.currentTarget.id);

    //this is where the change is made in the background
    puzzleBoard.style.backgroundImage = `url('./images/backGround${event.currentTarget.id}.jpg')`;
}

function handleStartDrag(e) {
    console.log(`started dragging ${this}`);
    draggedPiece = this;
}

function handleOver(e) {
    e.preventDefault();
    console.log("Dragged Over")
}

function handleDrop(e) { 
    console.log("Dropped!");
}
    //this is where the fix will go.
    //going to use an if statement
    //if ()

    if (this.dropZones>=1) { 
    this.appendChild(draggedPiece);
    e.preventDefault(); 
}  

//eventListeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));