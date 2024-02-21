

//Select buttons
const acButton = document.querySelector('#button-AC');
const changeOperatorButton = document.querySelector('#button-change-operator');
const percentButton = document.querySelector('#button-percent');
const pointButton = document.querySelector('#button-point');
const plusButton = document.querySelector('#button-plus');
const minusButton = document.querySelector('#button-minus');
const devideButton = document.querySelector('#button-devide');
const multiplyButton = document.querySelector('#button-multiply');
const equalButton = document.querySelector('#button-equal');

// Select all number buttons and add functionality to change the viewer text
const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((button) => {
    let buttonValue = button.textContent
    button.addEventListener('click', () => {
        creatingViewerText(buttonValue);
    })
})

// Viewer text
const viewer = document.querySelector('.viewer');
const viewerText = document.createElement('h3');
viewerText.innerHTML = '';

viewer.appendChild(viewerText);

const creatingViewerText = (number) => {
    let newText = (viewerText.innerHTML.replace(/\s/g, '') + number).replace(/\s/g, '');
    viewerText.innerHTML = newText;
    console.log(newText);
};

let firstNum = 0;
let operator = '';

const plusOperatorFunction = () => {
    firstNum = +(viewerText.innerHTML);
    viewerText.innerHTML = '';
    operator = '+';
}

const minusOperatorFunction = () => {
    firstNum = +(viewerText.innerHTML);
    viewerText.innerHTML = '';
    operator = '-';
}

const equalFunction = () => {
    if (operator === '+') {
        let sum = firstNum + +(viewerText.innerHTML)
        viewerText.innerHTML = sum.toString();
    }
    if (operator === '-') {
        let sum = firstNum - +(viewerText.innerHTML)
        viewerText.innerHTML = sum.toString();
    }
    // if (operator === '/') {
    //     let sum = firstNum / +(viewerText.innerHTML)
    //     viewerText.innerHTML = sum.toString();
    // }
    // if (operator === '+') {
    //     let sum = firstNum + +(viewerText.innerHTML)
    //     viewerText.innerHTML = sum.toString();
    // }
}

const clearViewerFunction = () => {
    firstNum = 0;
    operator = '';
    viewerText.innerHTML = '';
}

plusButton.addEventListener('click', plusOperatorFunction);
minusButton.addEventListener('click', minusOperatorFunction);
equalButton.addEventListener('click', equalFunction);
acButton.addEventListener('click', clearViewerFunction);




