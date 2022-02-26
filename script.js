function createGrid(){
    let gridSize = prompt('How many grid?');
    const grid = document.querySelector('.container');

    grid.style.gridTemplateRows = `repeat(${gridSize}, auto)`
    grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`


    for (let i = 0; i < gridSize**2; i ++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}

createGrid();
