const contentDiv = document.querySelector('.content');

let gridSize = 16;

// gets proper width and height of square divs to fit in content section
//changes a css variable

let cssVar = document.querySelector(':root');
setCssHeightAndWidth();

//640 value is from set height and width of grids container
function setCssHeightAndWidth() {
    for (let i = 1; i <= (gridSize * gridSize); i++) {
        let div = document.createElement('div');
       contentDiv.appendChild(div);
    }
    cssVar.style.setProperty('--css-grid-size-w-h', (640 / gridSize + 'px'));

    
}


const individualDivs = contentDiv.querySelectorAll('div');
console.log(individualDivs);

individualDivs.forEach(function(soloDiv) {
    soloDiv.addEventListener('mouseover', function() {
        if (drawChoice === 'black') {
            soloDiv.style.background = 'black';
        } else if (drawChoice === 'white') {
            soloDiv.style.background = 'white';
        } else if (drawChoice === 'eraser') {
            soloDiv.style.background = '#014b29';
        }

    });
});
let drawChoice = 'white';

const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', function() {
    drawChoice = 'black';
});

const eraserBtn = document.querySelector('#eraser');
eraserBtn.addEventListener('click', function() {
    drawChoice = 'eraser';
});

const whiteBtn = document.querySelector('#white');
whiteBtn.addEventListener('click', function() {
    drawChoice = 'white';
});

const changeBtn = document.querySelector('#change');
changeBtn.addEventListener ('click', function(changecheck) {
    let promptAnswer = +prompt('The grid is currently ' + gridSize + ' by ' + gridSize + '. Please the value of your new desired grid');
    console.log(promptAnswer);
    if (promptAnswer > 100) {
        alert('you can only enter up to 99');
        changecheck();
    } else if (promptAnswer === NaN) {
        alert('please enter only one number');
    } else {
        gridSize = promptAnswer;
    }
});

