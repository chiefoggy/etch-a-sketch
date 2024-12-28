
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
                square.style.cssText = `background-color: ${color}`;
            })
            
            square.classList.add('square'); 
            row.appendChild(square); 
        }
        board.appendChild(row); 
    }
}

createGrid(10);
