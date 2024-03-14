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
let firstNum = null;
let operator = '';

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        
        if (operator !== '' && operator !== button.textContent.replace(/\s/g, '')) {
            operatorButtons.forEach((element) => {
                if (element.textContent.replace(/\s/g, '') === operator) {
                    element.style.backgroundColor = 'rgb(249, 153, 0)';
                    element.style.color = 'white';
                }
            });
        }

        firstNum = +(viewerText.innerHTML);
        viewerText.innerHTML = '';
        
        button.style.backgroundColor = 'white';
        button.style.color = 'rgb(249, 153, 0)';
        
        operator = button.textContent.replace(/\s/g, '');

    });
});


const equalFunction = () => {
    if (operator === '+') {
        let result = firstNum + +(viewerText.innerHTML)
        viewerText.innerHTML = result.toString();
        document.querySelector('#button-plus').style.backgroundColor = 'rgb(249, 153, 0)';
        document.querySelector('#button-plus').style.color = 'white';
    }
    if (operator === '-') {
        let result = firstNum - +(viewerText.innerHTML)
        viewerText.innerHTML = result.toString();
        document.querySelector('#button-minus').style.backgroundColor = 'rgb(249, 153, 0)';
        document.querySelector('#button-minus').style.color = 'white';
    }
    if (operator === '/') {
        let result = firstNum / +(viewerText.innerHTML)
        viewerText.innerHTML = result.toString();
        document.querySelector('#button-divide').style.backgroundColor = 'rgb(249, 153, 0)';
        document.querySelector('#button-divide').style.color = 'white';
    }
    if (operator === 'x') {
        let result = firstNum * +(viewerText.innerHTML)
        viewerText.innerHTML = result.toString();
        document.querySelector('#button-multiply').style.backgroundColor = 'rgb(249, 153, 0)';
        document.querySelector('#button-multiply').style.color = 'white';
    }

};

const clearViewerFunction = () => {
    firstNum = null;
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




