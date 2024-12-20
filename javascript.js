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

function assignVar(display) {
  if (operator.length > 0) {
    // If theres an operator, assign to num2, otherwise assign to num1
    number2 = display;
    return number2;
  } else {
    number1 = display;
    return number1;
  }
}

function displayInput(display) {
  if (numberDisplay.innerText === "0") {
    numberDisplay.innerText = display;
  } else if (display === "clear") {
    numberDisplay.innerText = "0";
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
          operator = "add";
          break;
        case "subtract":
          operator = "subtract";
          break;
        case "multiply":
          operator = "multiply";
          break;
        case "divide":
          operator = "divide";
          break;
        case "equals":
          display = "equals";
          break;
      }
    });
  }
}

getNumber();
