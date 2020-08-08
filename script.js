let expression = '';

function clear() {
    document.querySelector('#expression').textContent = '';
    document.querySelector('#result').textContent = '';
    expression = '';
    decimalCounter = 0;
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

const numberButtons = document.querySelectorAll('.numbers');
numberButtons.forEach((button) => {
    button.addEventListener('click', changeExpression);
})

const operationButtons = document.querySelectorAll('.operation');
operationButtons.forEach((button) => {
    button.addEventListener('click', changeExpressionOperation);
})

function changeExpression() {
    if (expression.length <= 23) {
        expression += this.textContent;
        document.querySelector('#expression').textContent = expression.replace('**', '^');
    }
}

function changeExpressionOperation() {
    if (expression.length <= 23) {
        switch (this.id) {
            case 'add':
                if (!isNaN(expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1))) {
                    expression += '+';
                    document.querySelector('#expression').textContent = expression.replace('**', '^');
                    decimalCounter = 0;
                }
                break;
            case 'subtract':
                if (!isNaN(expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1))) {
                    if (expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1) == '+' || expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1) == '*' || expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1) == '/' || expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1) == '^') {
                        expression += '-';
                        document.querySelector('#expression').textContent = expression.replace('**', '^');
                        decimalCounter = 0;
                    } else {
                        expression += '-';
                        document.querySelector('#expression').textContent = expression.replace('**', '^');
                        decimalCounter = 0;
                    }
                } else if (isNaN(expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1))) {
                    if (expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1) == '+' || expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1) == '*' || expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1) == '/' || expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1) == '^') {
                        expression += '-';
                        document.querySelector('#expression').textContent = expression.replace('**', '^');
                        decimalCounter = 0;
                    }
                }
                break;
            case 'multiply':
                if (!isNaN(expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1))) {
                    expression += '*';
                    document.querySelector('#expression').textContent = expression.replace('**', '^');
                    decimalCounter = 0;
                }
                break;
            case 'divide':
                if (!isNaN(expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1))) {
                    expression += '/';
                    document.querySelector('#expression').textContent = expression.replace('**', '^');
                    decimalCounter = 0;
                }
                break;
            case 'power':
                if (!isNaN(expression.replace('**', '^').charAt(expression.replace('**', '^').length - 1))) {
                    expression += '**';
                    document.querySelector('#expression').textContent = expression.replace('**', '^');
                    decimalCounter = 0;
                }
                break;
            default:
                break;
        }
    }
}

function calculate(expression) {
    let result = expression.replace(/[^-()\d/*+.]/g, '');
    if (result.includes('/0')) {
        alert('Division by zero is not possible.');
    } else {
        return new Function('return ' + result)();
    }
}

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    while (isNaN(expression.charAt(expression.length - 1))) {
        expression = expression.slice(0, -1);
    }
    document.querySelector('#expression').textContent = expression.replace('**', '^');
    let result = calculate(expression);

    while (result % 1 !== 0 && result.toString().length > 13) {
        result = result.toString().slice(0, -1);
    }

    while (result.toString().charAt(result.toString().length - 1) == '0') {
        result = result.toString().slice(0, -1);
    }

    document.querySelector('#result').textContent = result;
});

const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', () => {
    if (isNaN(expression.charAt(expression.length - 1))) {
        decimalCounter = 1;
    }
    expression = expression.slice(0, -1);
    document.querySelector('#expression').textContent = expression.replace('**', '^');
})

decimalCounter = 0;

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => {
    if (!isNaN(expression.length - 1) && decimalCounter == 0) {
        expression += '.';
        document.querySelector('#expression').textContent = expression.replace('**', '^');
        decimalCounter++;
    }
})

// keyboard input

window.addEventListener('keydown', keyboardInput);

function keyboardInput(event) {
    switch (event.keyCode) {
        case 48:
        case 96:
            document.querySelector('#zero').click();
            break;
        case 49:
        case 97:
            document.querySelector('#one').click();
            break;
        case 50:
        case 98:
            document.querySelector('#two').click();
            break;
        case 51:
        case 99:
            document.querySelector('#three').click();
            break;
        case 52:
        case 100:
            document.querySelector('#four').click();
            break;
        case 53:
        case 101:
            document.querySelector('#five').click();
            break;
        case 54:
        case 102:
            document.querySelector('#six').click();
            break;
        case 55:
        case 103:
            document.querySelector('#seven').click();
            break;
        case 56:
        case 104:
            document.querySelector('#eight').click();
            break;
        case 57:
        case 105:
            document.querySelector('#nine').click();
            break;
        case 110:
        case 188:
        case 190:
            document.querySelector('#decimal').click();
            break;
        case 8:
            document.querySelector('#delete').click();
            break;
        case 13:
            document.querySelector('#equals').click();
            break;
        case 46:
            document.querySelector('#clear').click();
            break;
        case 107:
        case 187:
            document.querySelector('#add').click();
            break;
        case 109:
        case 189:
        case 191:
            document.querySelector('#subtract').click();
            break;
        case 80:
            document.querySelector('#power').click();
            break;
        case 106:
            document.querySelector('#multiply').click();
            break;
        case 111:
            document.querySelector('#divide').click();
            break;
    }
}

const helpButton = document.querySelector('#help-button');

helpButton.addEventListener('mouseenter', () => {
    document.querySelector('#help-info').style.display = 'block';
})

helpButton.addEventListener('mouseleave', () => {
    document.querySelector('#help-info').style.display = 'none';
})

helpButton.addEventListener('click', () => {
    document.querySelector('#help-info').style.display = 'none';
})