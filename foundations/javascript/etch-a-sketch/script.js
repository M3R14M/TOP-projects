const grid = document.getElementById("grid");
let box;
let amount = 16;
let sizeGrid = Math.pow(amount, 2);

function fill(sizeGrid) {
    for (let i = 0; i < sizeGrid; i++) {
        box = document.createElement("div");
        grid.append(box);
    }
}
fill(sizeGrid);
