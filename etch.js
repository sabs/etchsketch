
function displayGrid(gridSize) {
    const container = document.getElementById('container');
    container.innerHTML = "";

    for (let x = 0; x < (gridSize); x++) {
        let newdiv = document.createElement('div');
        for (let y = 0; y < (gridSize); y++) {
            let newbox = document.createElement('div');
            newdiv.appendChild(newbox);
        }
        container.appendChild(newdiv);
    }    
    container.addEventListener('touchmove', paintSquareTouch);
    container.addEventListener('mouseover', paintSquare);
}

function paintSquare(e) {
    e.target.style.backgroundColor = getBackgroundColor();
}


function getBackgroundColor() {
    const colorPicker = document.getElementById('color');
    return colorPicker.value;
}

function paintSquareTouch(e) {
    let touch = e.touches[0];
    let square = document.elementFromPoint(touch.clientX, touch.clientY);
    const container = document.getElementById('container');
    if (container.contains(square)) {
        square.style.backgroundColor = getBackgroundColor();
    }
}

// this.color.addEventListener('change', setBackgroundColor, false);
this.gridSizeButton.addEventListener('click', function (e) {
    const gridSize = document.getElementById('gridSize').value;
    if (gridSize >= 2 && gridSize <= 100) {
        displayGrid(gridSize);
    }
})
displayGrid(16);

function preventBehavior(e) {
    e.preventDefault(); 
};

document.addEventListener("touchmove", preventBehavior, {passive: false});