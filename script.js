const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const head = document.querySelector('.head');
const equal = document.querySelector('.equal');

let tempOne;
let tempTwo;
let tempOp;

number.forEach((number) => {
    number.addEventListener('click', () => {
        head.innerHTML += number.innerHTML;
    });
});

operator.forEach((operator) => {
    operator.addEventListener('click', () => {
        tempOp = operator.innerHTML;
        if(tempOne === undefined) {
            tempOne = head.innerHTML;
        } else {
            tempTwo = head.innerHTML;
        };
        head.innerHTML = '';
    })
})

