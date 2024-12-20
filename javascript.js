function add(num1, num2) {
  const total = num1 + num2;
  return total;
}

function subtract(num1, num2) {
  const total = num1 - num2;
  return total;
}

function multiply(num1, num2) {
  const total = num1 * num2;
  return total;
}

function divide(num1, num2) {
  const total = num1 / num2;
  return total;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
  }
}

let number1 = "";
let number2 = "";
let operator = "";
let operation = "";

function assignVar(display) {
  if (!operation.length > 0) {
    // If theres an operator, assign to num2, otherwise assign to num1
    number1 += display;
    console.log("this is number one");
    number1 = parseInt(number1);
    return number1;
  } else {
    number2 += display;
    console.log("this is number two");
    number2 = parseInt(number2);
    return number2;
  }
}

function displayInput(display) {
  if (numberDisplay.innerText === "0") {
    numberDisplay.innerText = assignVar(display);
  } else if (display === "clear") {
    number1 = "";
    number2 = "";
    operation = "";
    numberDisplay.innerText = "0";
  } else if (display === "equals") {
    numberDisplay.innerText = operate(operation, number1, number2);
  } else if (operator.length > 0) {
    numberDisplay.innerHTML += operator;
    operator = "";
  } else {
    numberDisplay.innerText += assignVar(display);
  }
}

let numberDisplay = document.getElementById("number-display");
const buttons = document.getElementsByClassName("buttons");

function getNumber() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      switch (this.id) {
        case "seven":
          display = "7";
          displayInput(display);
          break;
        case "eight":
          display = "8";
          displayInput(display);
          break;
        case "nine":
          display = "9";
          displayInput(display);
          break;
        case "four":
          display = "4";
          displayInput(display);
          break;
        case "five":
          display = "5";
          displayInput(display);
          break;
        case "six":
          display = "6";
          displayInput(display);
          break;
        case "one":
          display = "1";
          displayInput(display);
          break;
        case "two":
          display = "2";
          displayInput(display);
          break;
        case "three":
          display = "3";
          displayInput(display);
          break;
        case "zero":
          display = "0";
          displayInput(display);
          break;
        case "clear":
          display = "clear";
          displayInput(display);
          break;
        case "add":
          operator = "&plus;";
          operation = "add";
          displayInput(operator);
          break;
        case "subtract":
          operator = "&minus;";
          operation = "subtract";
          displayInput(operator);
          break;
        case "multiply":
          operator = "&times;";
          operation = "multiply";
          displayInput(operator);
          break;
        case "divide":
          operator = "&divide;";
          operation = "divide";
          displayInput(operator);
          break;
        case "equals":
          display = "equals";
          displayInput(display);
          break;
      }
    });
  }
}

getNumber();
