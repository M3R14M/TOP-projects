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
    this.className = 'solid';
}
createGrid(16);
