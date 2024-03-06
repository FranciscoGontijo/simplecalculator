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
    });
});

const creatingViewerText = (number) => {
        let newText = (viewerText.innerHTML + number).replace(/\s/g, '');
        viewerText.innerHTML = newText;
};

const pointButtonFunction = () => {
    if (!viewerText.textContent.includes('.')) {
        let newText = (viewerText.innerHTML + '.').replace(/\s/g, '');
        viewerText.innerHTML = newText;
    }
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

const changeSignalButton = () => {
    //check if the signal is negative and change to positive, if not change to negative
    let result = +(viewerText.innerHTML);
    viewerText.innerHTML = result * (-1);
}

const usePercentButton = () => {
    let result = +(viewerText.innerHTML);
    viewerText.innerHTML = result / 100;
};



//Add event listeners
equalButton.addEventListener('click', equalFunction);
acButton.addEventListener('click', clearViewerFunction);
changeOperatorButton.addEventListener('click', changeSignalButton);
percentButton.addEventListener('click', usePercentButton);
pointButton.addEventListener('click', pointButtonFunction);



