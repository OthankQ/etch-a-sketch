const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', deleteCells);

function createGrid(){
    let gridSize = getGridSize();

    const grid = document.querySelector('.grid');

    grid.style.gridTemplateRows = `repeat(${gridSize}, auto)`
    grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`

    createCells(gridSize, grid);
}

function createCells(size, parentElement) {
    for (let i = 0; i < size**2; i ++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = `black`;
        })
        parentElement.appendChild(cell);
    }
}

function deleteCells() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.remove()
    })
    createGrid();
}

function getGridSize() {
    let gridSize;
    // Limit number of cells
    console.log(typeof gridSize);
    while (gridSize > 100 || gridSize < 1 || gridSize === undefined || gridSize === NaN) {
        gridSize = prompt('How many grid? (Enter a number between 1 and 100)');
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
