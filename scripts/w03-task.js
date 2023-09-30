/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function addNumbers() {
    function add(number1, number2) {
        return number1 + number2;
    }

    let addNumber1 = Number(document.getElementById('add1').value);
    let addNumber2 = Number(document.getElementById('add2').value);
    document.getElementById('sum').value = add(addNumber1, addNumber2);
}
document.getElementById("addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */
const subtractNumbers = function () {
    const subtract = function (number1, number2) {
        return number1 - number2;
    }
    let subtract1 = Number(document.getElementById("subtract1").value);
    let subtract2 = Number(document.getElementById("subtract2").value);

    document.getElementById('difference').value = subtract(subtract1, subtract2);
}
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiplyNumbers = () => {
    const multiply = (number1, number2) => {
        return number1 * number2;
    }
    let factor1 = Number(document.getElementById("factor1").value);
    let factor2 = Number(document.getElementById("factor2").value);

    document.getElementById("product").value = multiply(factor1, factor2);
}
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divideNumbers = () => {
    const divide = (number1, number2) => {
        return number1 / number2;
    }
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.getElementById("divisor").value);
    document.getElementById("quotient").value = divide(dividend, divisor);
}
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
document.getElementById("odds").innerHTML = numbersArray.filter(number => number % 2 != 0);
/* Output Evens Only Array */
document.getElementById("evens").innerHTML = numbersArray.filter(number => number % 2 == 0);
/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbersArray.reduce((accumulator, number) => accumulator + number);
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = numbersArray.map(number => number * 2).reduce((accumulator, current) => accumulator + current);
