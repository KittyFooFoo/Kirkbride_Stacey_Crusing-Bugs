console.log("Javascript is connected");

//variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");
let draggedPiece;

//functions
function changeBGImage(event) {
    //console.log("changeBGimage called");
    //Method 1
    //console.log(this.id);
    //background-image: url('../images/backGround0.jpg');
    console.log(event.currentTarget.id);
    puzzleBoard.style.backgroundImage = `url('./images/backGround${event.currentTarget.id}.jpg')`;
//resetPuzzle();
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

function handleDrop() { 
    console.log("Dropped!");
    draggedPiece = this;
}
    //this is where the fix will go.
    //going to use an if statement
    //if ()

    if (this.dropZones>=0) { 
    this.appendChild(draggedPiece);
}  

else if (this.dropzone>=1) {
    resetPuzzle
}

function resetPuzzle() {
    console.log("Puzzle reset!")
}

//eventListeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));