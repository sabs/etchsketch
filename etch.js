
function displayGrid(gridSize) {
    const container = document.getElementById('container');

    for (let x = 0; x < (gridSize); x++) {
        let newdiv = document.createElement('div');
        for (let y = 0; y < (gridSize); y++) {
            let newbox = document.createElement('div');
            newdiv.appendChild(newbox);
        }
        container.appendChild(newdiv);
    }    
    
}

displayGrid(64);
