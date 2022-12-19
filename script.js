const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const head = document.querySelector('.head');
const equal = document.querySelector('.equal');
const ce = document.querySelector('.clear');
const source = document.querySelector('.source')

let tempOne;
let tempTwo;
let tempOp;

const operators = {
    '+': function(a, b) { return +a + +b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b },
}

document.addEventListener('click', () => {
    source.innerHTML = `${tempOne}, ${tempOp}, ${tempTwo}`;
});

number.forEach((number) => {
    number.addEventListener('click', () => {
        head.innerHTML += number.innerHTML;
    });
});

operator.forEach((operator) => {
    operator.addEventListener('click', () => {
        if(tempOne === undefined) {
            tempOne = head.innerHTML;
        };

        tempOp = operator.innerHTML;
        head.innerHTML = '';
    });
});

equal.addEventListener('click', () => {
    tempTwo = head.innerHTML;
    head.innerHTML = operators[tempOp](tempOne, tempTwo);
    tempOne = head.innerHTML;
    tempTwo = 0;
    tempOp = undefined;
});

ce.addEventListener('click', () => {
    tempOne = undefined;
    tempTwo = undefined;
    tempOp = undefined;
    head.innerHTML = '';
});

