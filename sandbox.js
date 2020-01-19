function evaluateEquation(equation){
    for (let x = 0; x < equation.length; x++) {
        if (equation[x] === '÷' || equation[x] === '×') {
            equation.splice(x-1, 3, (operate(equation[x-1], equation[x+1], equation[x])));
            x -= 1;
        }
    }
    for (let x = 0; x < equation.length; x++) {
        if (equation[x] === '+' || equation[x] === '-') {
            equation.splice(x-1, 3, (operate(equation[x-1], equation[x+1], equation[x])));
            x -= 1;
        }
    }
    console.log(equation[0].toString());
    return(equation[0].toString());
}

function operate(num1, num2, operator){
    switch (operator) {
        case '/':
            return divide(num1, num2);
            break;
        case '×':
            return multiply(num1, num2);
            break;
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
    }
}

// Calculation functions
const divide = (a, b) => a/b;
const multiply = (a, b) => a*b;
const add = (a, b) => a+b;
const subtract = (a, b) => a-b;

let test = [9, "×", 9, "-", 6, "+", 0];
evaluateEquation(test);