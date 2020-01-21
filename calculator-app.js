const resultWindow = document.querySelector('.chosen-button-display');
const buttonsContainer = document.querySelector('.grid-container');
const buttons = document.getElementsByTagName('button');
let equationArray = [];
let numberFromScreen = "";
// console.log(resultWindow.innerText);
// console.log(resultWindow.textContent);

buttonsContainer.addEventListener('click', e => {
    const button = e.target;
    const buttonValue = e.target.value;
    // let currentContentOnScreen = resultWindow.textContent; <- czemu jak zrobię zmienną to nie działa?

    // Remove insrted class from all keys
    Array.from(buttons)
    .forEach(k => k.classList.remove('inserted'))
    // console.log(buttons)
     
    //when user click on buttons
   if(button.tagName === 'BUTTON'){
    // when digit button is inserted
        if(button.classList.contains('digit-button')){
            if(resultWindow.innerText === "" || resultWindow.innerText === '0'){
            resultWindow.textContent = buttonValue;
            numberFromScreen = buttonValue;
            } else {
            resultWindow.textContent += buttonValue;  
            numberFromScreen += buttonValue;
            }
        }

    // when operator button is inserted
    if(button.classList.contains('operation-button')){
        button.classList.add('inserted');
        equationArray.push(numberFromScreen);
        equationArray.push(buttonValue);
        resultWindow.textContent += buttonValue;
        numberFromScreen = ""
        console.log(equationArray);
    }

    if(button.classList.contains('decimal')){
        //check if there is colon already inside the number
        if(numberFromScreen.includes('.')){
            alert('No more decimals MEIN FREUND!!!')
        } else{
            numberFromScreen += '.';
            resultWindow.textContent += '.';
        }
    }

    if(button.classList.contains('result')){
        button.classList.add('inserted');
        equationArray.push(numberFromScreen);
        numberFromScreen = ""
        console.log(equationArray);
        // console.log(typeof(equationArray[0]))
        resultWindow.innerText = equationSolvingFunction(convertEquationStringToArray(equationArray));
    }

    if(button.id === 'reset'){
        equationArray = [];
        numberFromScreen = '';
        resultWindow.textContent = '';
    }

    if(button.id === 'plus-minus'){
        if(Number(numberFromScreen) > 0){
            numberFromScreen = '-' + numberFromScreen;
        } 
    }


   }
})

// function, which convert string numbers to numbers
function convertEquationStringToArray(equation) {
    let equationArray = [];
    let num = '';
    for (let x = 0; x < equation.length; x ++) {
        console.log(isNaN(equation[x]))
        if (!isNaN(equation[x]) || equation[x] === ',') {
            num += equation[x];
        } else {
            //Number() convert data type to number
            equationArray.push(Number(num));
            equationArray.push(equation[x]);
            num = '';
        }
    }
    // for the last index
    equationArray.push(Number(num));
    console.log(equationArray);
    return equationArray;
}

// function, which calculate equation in array
function equationSolvingFunction(equationArray){
    for(let x = 0; x < equationArray.length; x++){
        if(equationArray[x] === 'x' || equationArray[x] === '÷'){
            equationArray.splice(x-1, 3, (operate(equationArray[x-1], equationArray[x+1], equationArray[x])));
            x -= 1;
        }
    }

    for(let x = 0; x < equationArray.length; x++){
        if(equationArray[x] === '+' || equationArray[x] === '-'){
            equationArray.splice(x-1, 3, (operate(equationArray[x-1], equationArray[x+1], equationArray[x])));
            x -= 1;
        }
    }

    console.log(equationArray[0].toString());
    return(equationArray[0].toString());
}

function operate(num1, num2, operator){
    switch (operator){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '÷':
            return divide(num1, num2);
            break;
        case 'x':
            return multiply(num1, num2);
            break;
    }
}

//function expression
// const add = function (a, b){
//     return a+b;
// }
// CALCULATING FUNCTIONS

const add = (a, b) => a+b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;

// let test = [9, "x", 9, "-", 6, "+", 0];
// equationSolvingFunction(test);