const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const head = document.querySelector('.head');
const equal = document.querySelector('.equal');
const ce = document.querySelector('.clear');
const source = document.querySelector('.source')

let tempOne;
let tempTwo;
let tempOp;

//magic
const operators = {
    '+': function(a, b) { return +a + +b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b },
}

//showing the variables each time one is changed
document.addEventListener('click', () => { 
    source.innerHTML = `${tempOne}, ${tempOp}, ${tempTwo}`;
});

//when number key pressed, put in head
number.forEach((number) => {
    number.addEventListener('click', () => {
        head.innerHTML += number.innerHTML;
    });
});

//checking if has pre-existing variable one and also confirms operator
operator.forEach((operator) => {
    operator.addEventListener('click', () => {
        if(tempOne === undefined) {
            tempOne = head.innerHTML;
        };
        //scrapped doesn't work, if variable all defined, does equal then resets
        // if(tempTwo != undefined) { 
        //     head.innerHTML = operators[tempOp](tempOne, tempTwo);
        //     tempOne = head.innerHTML;
        //     tempTwo = 0;
        //     tempOp = undefined;
        // };

        tempOp = operator.innerHTML;
        head.innerHTML = '';
    });
});

//evaluates variables
equal.addEventListener('click', () => {
    tempTwo = head.innerHTML;
    head.innerHTML = operators[tempOp](tempOne, tempTwo);
    tempOne = head.innerHTML;
    tempTwo = 0;
    tempOp = undefined;
});

//clear variables
ce.addEventListener('click', () => {
    tempOne = undefined;
    tempTwo = undefined;
    tempOp = undefined;
    head.innerHTML = '';
});

