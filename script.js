
let whiteBoard = document.querySelector('#whiteBoard');
for (let i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        let sqGrid = document.createElement('div');
        sqGrid.className = 'sqGrid';
        whiteBoard.appendChild(sqGrid);
    }
}

whiteBoard.addEventListener('mousemove', function (event) {
    let x = event.clientX;
    let y = event.clientY;
    document.elementFromPoint(x, y).style.backgroundColor = "yellow";
    //console.log("moving");
});

document.addEventListener('click', function (event) {
    document.querySelectorAll('.sqGrid').forEach(item => {
        item.style.backgroundColor = "white";
    });
});
//console.log("moving");


