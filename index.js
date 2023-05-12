document.getElementById("player").setAttribute("draggable", true);
document.getElementById("player").addEventListener("dragstart", make_playerRed_andCircle);

function make_playerRed_andCircle(event) {
    event.target.style.backgroundColor = "red";
    event.target.style.borderRadius = "50%";
    event.dataTransfer.setData("text", event.target.id);
}


var squaresDroppable = document.getElementsByClassName("square");

for (let i = 0; i < squaresDroppable.length; i++) {
    squaresDroppable[i].addEventListener("dragover", allowDrop);
}
function allowDrop(event) {    
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}


for (let i = 0; i < squaresDroppable.length; i++) {
    squaresDroppable[i].addEventListener("drop", drop);
}

function drop(ev) {
    ev.preventDefault();    
    
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));  
    makePlayer_originShape();
}

function makePlayer_originShape(){
    let player = document.getElementById("player");
    player.style.backgroundColor = "#000";
    player.style.borderRadius = "0%";
}
