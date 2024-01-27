/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */

const subtract = function (subtract1, subtract2) {
    return subtract1 - subtract2;
}

function subtractnumbers() {
    let subtract1 = document.querySelector('#subtract1').value;
    let subtract2 = document.querySelector('#subtract2').value;

    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractnumbers)

/* Arrow Function - Multiply Numbers */

const multiply = (factor1, factor2) => factor1 * factor2;

function multiplynumbers() {
    let factor1 = document.querySelector('#factor1').value;
    let factor2 = document.querySelector('#factor2').value;

    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplynumbers)

/* Open Function Use - Divide Numbers */

const divide = (dividend, divisor) => dividend / divisor;

function dividenumbers() {
    let dividend = document.querySelector('#dividend').value;
    let divisor = document.querySelector('#divisor').value;

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', dividenumbers)

/* Decision Structure */

function getTotalDue() {

    let subtotal = document.querySelector('#subtotal').value;
    let checkbox = document.getElementById('member');

    if (checkbox.checked){
        document.getElementById('total').textContent =  `$ ${(subtotal * .8).toFixed(2)}`;
    }

    else{
        document.getElementById('total').textContent = `$ ${(subtotal * 1).toFixed(2)}`;
    }

}

document.querySelector('#getTotal').addEventListener('click', getTotalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
document.getElementById('array').textContent = numbersArray
/* Output Odds Only Array */
let oddArray = numbersArray.filter((number) => number % 2 === 1)
document.getElementById('odds').textContent = oddArray
/* Output Evens Only Array */
let evenArray = numbersArray.filter((number) => number % 2 === 0)
document.getElementById('evens').textContent = evenArray
/* Output Sum of Org. Array */
let sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue)
document.getElementById('sumOfArray').textContent = sum
/* Output Multiplied by 2 Array */
let dblNumberArry = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = dblNumberArry
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = dblNumberArry.reduce((accumulator, currentValue) => accumulator + currentValue)
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied