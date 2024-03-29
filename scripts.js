const contentDiv = document.querySelector('.content');
let individualDivs;
let cssVar = document.querySelector(':root');
let gridSize = 16;

const colorArray = ['blue', 'red', 'pink', 'orange', 'purple', 'green'];
setCssHeightAndWidth();

function setCssHeightAndWidth() {
    for (let i = 1; i <= (gridSize * gridSize); i++) {
        let div = document.createElement('div');
       contentDiv.appendChild(div);
    }

    cssVar.style.setProperty('--css-grid-size-w-h', (640 / gridSize + 'px'));

    individualDivs = contentDiv.querySelectorAll('div');

    individualDivs.forEach(function(soloDiv) {
        soloDiv.addEventListener('mouseover', function() {
            if (drawChoice === 'black') {
                soloDiv.style.background = 'black';
            } else if (drawChoice === 'white') {
                soloDiv.style.background = 'white';
            } else if (drawChoice === 'eraser') {
                soloDiv.style.background = '#014b29';
            } else if (drawChoice === 'rainbow') {
                let randomColor = Math.floor(Math.random() * colorArray.length);
                soloDiv.style.background = colorArray[randomColor];
            }
        });
    });
    
}


function removeOldGrid() {
    while (contentDiv.hasChildNodes())
    contentDiv.removeChild(contentDiv.firstChild)
}


//button functions below

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

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', function() {
   removeOldGrid();
   setCssHeightAndWidth();
});

const rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener('click', function () {
    drawChoice = 'rainbow';
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
        removeOldGrid();
        setCssHeightAndWidth();
    }
});

