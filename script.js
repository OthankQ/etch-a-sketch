function createGrid(){
    let gridSize = getGridSize();

    const grid = document.querySelector('.container');

    grid.style.gridTemplateRows = `repeat(${gridSize}, auto)`
    grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`

    addCells(gridSize, grid);
}

function addCells(size, parentElement) {
    for (let i = 0; i < size**2; i ++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = `black`;
        })
        parentElement.appendChild(cell);
    }
}

function getGridSize() {
    let gridSize;
    // Limit number of cells
    console.log(typeof gridSize);
    while (gridSize > 100 || gridSize < 1 ||gridSize === undefined || gridSize === NaN) {
        gridSize = prompt('How many grid?');
    };

    if (gridSize === null) {
        return;
    }

    return gridSize;
}

function getRandomNumber() {
    return Math.floor(Math.random * 255) + 1;
}

createGrid();
