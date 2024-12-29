let gridLength = 16;
let color = 'lightgrey';
let randColor = false;

colorButtons = document.querySelectorAll('.color');
colorButtons.forEach((btn) => {
    btn.style.backgroundColor = btn.id;
    btn.addEventListener('click', () => {
        color = btn.id;
        randColor = false;
    })
});

randColorButton = document.querySelector('.random');
randColorButton.addEventListener('click', () => {
    randColor = true;
})

function createGrid(size) {
    const board = document.getElementById('board-container');
    board.innerHTML = ""; 
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row'); 
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.addEventListener('mouseover', () => {
                if (randColor == true){
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    color = `rgb(${r},${g},${b})`;
                }
                square.style.cssText = `background-color: ${color}`;
            })
            
            square.classList.add('square'); 
            row.appendChild(square); 
        }
        board.appendChild(row); 
    }
}
createGrid(gridLength);

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    createGrid(gridLength);
})

const newGridButton = document.querySelector('.new-grid');
newGridButton.addEventListener('click', () => {
    gridLength = parseInt(prompt('Enter your desired grid length: '));
    if (Number.isInteger(gridLength)){
        if (gridLength > 100){
            gridLength = 100;
        }
        else if (gridLength < 1){
            gridLength = 5; 
        }
        createGrid(gridLength);
    }
    else{
        alert("Invalid input! Please only input integers.");
    }
})