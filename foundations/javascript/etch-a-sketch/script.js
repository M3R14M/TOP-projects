const grid = document.getElementById('grid');

function createGrid(sizeInput) {
    let sizeGrid = Math.pow(sizeInput, 2);
    for (let i = 0; i < sizeGrid; i++) {
        let raster = document.createElement('div');
        raster.classList.add('empty');
        grid.append(raster);
    }
    let pixelGrid = grid.querySelectorAll('div');
    pixelGrid.forEach(pixel => pixel.addEventListener('mouseover', draw));
}

function draw() {
    if (this.classList.contains('empty') == true) {
        this.className = 'a20';
    } else if (this.classList.contains('a20') == true) {
        this.className = 'a40';
    } else if (this.classList.contains('a40') == true) {
        this.className = 'a60';
    } else if (this.classList.contains('a60') == true) {
        this.className = 'a80';
    } else {
        this.className = 'solid';
    }
}
// Button for clearing current grid and creating a new grid
let btn = document.getElementById('clear');
btn.addEventListener('click', clear);

function clear() {
    sizeInput = prompt('What width should your grid have?');
    if (sizeInput == null) {
        return; //  in case of cancel
    } else if (sizeInput > 64) {
        sizeInput = prompt('The maximum allowed size is 64.');
    } else if (sizeInput < 4) {
        sizeInput = prompt('A minimum of 4 is required to create a grid');
    } else if (isNaN(sizeInput) == true) {
        sizeInput = 16; // back to default in case of faulty input
    };
    grid.textContent = '';
    grid.style.gridTemplateColumns = `repeat(${sizeInput}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${sizeInput}, 1fr)`;
    createGrid(sizeInput);
}

createGrid(16);
