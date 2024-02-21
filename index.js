

//Select buttons
const acButton = document.querySelector('#button-AC');
const changeOperatorButton = document.querySelector('#button-change-operator');
const percentButton = document.querySelector('#button-percent');
const pointButton = document.querySelector('#button-point');
const equalButton = document.querySelector('#button-equal');

// Select all number buttons and add functionality to change the viewer text
const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((button) => {
    let buttonValue = button.textContent
    button.addEventListener('click', () => {
        creatingViewerText(buttonValue);
    })
});

const creatingViewerText = (number) => {
    let newText = (viewerText.innerHTML + number).replace(/\s/g, '');
    viewerText.innerHTML = newText;
};

// Viewer text
const viewer = document.querySelector('.viewer');
const viewerText = document.createElement('h3');
viewerText.innerHTML = '';

viewer.appendChild(viewerText);

//Select all operator buttons
const operatorButtons = document.querySelectorAll('.operator-button');

//Add functionalities to operator buttons
let firstNum = 0;
let operator = '';

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        firstNum = +(viewerText.innerHTML);
        viewerText.innerHTML = '';
        operator = button.textContent.replace(/\s/g, '');
    });
});


const equalFunction = () => {
    if (operator === '+') {
        let result = firstNum + +(viewerText.innerHTML)
        viewerText.innerHTML = result.toString();
    }
    if (operator === '-') {
        let result = firstNum - +(viewerText.innerHTML)
        viewerText.innerHTML = result.toString();
    }
    if (operator === '/') {
        let result = firstNum / +(viewerText.innerHTML)
        viewerText.innerHTML = result.toString();
    }
    if (operator === 'x') {
        let result = firstNum * +(viewerText.innerHTML)
        viewerText.innerHTML = result.toString();
    }
};

const clearViewerFunction = () => {
    firstNum = 0;
    operator = '';
    viewerText.innerHTML = '';
};

//Add event listeners
equalButton.addEventListener('click', equalFunction);
acButton.addEventListener('click', clearViewerFunction);




