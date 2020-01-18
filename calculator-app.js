
const keys = document.querySelector('.grid-container');
let resultWindow = document.querySelector('.chosen-button-display');
let equationArray = [];
let chosenNumber = "";
let operatorSymbol = ""


keys.addEventListener('click', e => {
    if(e.target.classList.contains('button')){
        const key = e.target;
        const displayNumber = resultWindow.textContent;

        if(key.classList.contains('digit-button')){
            if(displayNumber === '0'){
                resultWindow.textContent = key.value;
                chosenNumber = key.value;
            } else {
                resultWindow.textContent = displayNumber + key.value;
                chosenNumber += key.value;
            }
        }

        if(key.classList.contains('operation-button')){
            console.log(chosenNumber)
            equationArray.push(chosenNumber);
            chosenNumber = "";
            // equationArray.push(key.value);
            resultWindow.textContent = displayNumber + key.value;
            console.log(equationArray);
            operatorSymbol = key.value;
        }

        if(key.classList.contains('result')){
            equationArray.push(chosenNumber);
            console.log(equationArray);
            operate(equationArray, operatorSymbol);
        }

        // if(key.classList.contains('decimal')){

        // }
    }
})


// operate function which takes 2 numbers and one operator and call appropriate function add/subtract/divide/multiply
function operate(calcNumber, operatorSymbol){
    switch(operatorSymbol){
        case "+":
            addingFunction(calcNumber[0], calcNumber[1]);
            break;
        case "-":
            subtractingFunction(calcNumber[0], calcNumber[1]);
            break;
        case "x":
            multiplyingFunction(calcNumber[0], calcNumber[1]);
            break;
        case "/":
            dividingFunction(calcNumber[0], calcNumber[1]);
            break;
    }
}


function addingFunction(a, b){
    console.log(a + b);
    resultWindow.textContent = a + b;
    return a + b;
}

function subtractingFunction(a, b){
    console.log(a - b);
    resultWindow.textContent = a - b;
    return a - b;
}

function multiplyingFunction(a, b){
    console.log(a * b);
    resultWindow.textContent = a * b;
    return a * b;
}

function dividingFunction(a, b){
    console.log(a / b);
    resultWindow.textContent = a / b;
    return a / b;
}