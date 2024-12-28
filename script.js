function createGrid(size) {
    const board = document.getElementById('board-container');
    board.innerHTML = ""; // Clear previous grid

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row'); 
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square'); 
            row.appendChild(square); 
        }
        board.appendChild(row); 
    }
}

createGrid(16);