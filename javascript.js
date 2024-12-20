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

let number1;
let operator;
let number2;

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

let numberDisplay = document.getElementById("number-display");
const buttons = document.getElementsByClassName("buttons");

function getNumber() {
  let num1 = "";
  let num2 = "";
  let operator = "";
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      switch (this.id) {
        case "seven":
          num1 = "7";
          break;
        case "eight":
          display = "8";
          break;
        case "nine":
          display = "9";
          break;
        case "four":
          display = "4";
          break;
        case "five":
          display = "5";
          break;
        case "six":
          display = "6";
          break;
        case "one":
          display = "1";
          break;
        case "two":
          display = "2";
          break;
        case "three":
          display = "3";
          break;
        case "zero":
          display = "0";
          break;
        case "clear":
          display = "clear";
          break;
        case "add":
          display = "operator";
          operator = "+";
          break;
        case "subtract":
          display = "operator";
          operator = "-";
          break;
        case "multiply":
          display = "operator";
          operator = "x";
          break;
        case "divide":
          display = "operator";
          operator = "/";
          break;
        case "equals":
          display = "equals";
          break;
      }

      if (numberDisplay.innerText === "0") {
        numberDisplay.innerText = display;
      } else if (display === "clear") {
        numberDisplay.innerText = "0";
      } else if (display === "equals") {
        operate(operator, num1, num2);
        numberDisplay.innerText += ` ${operator}`;
      } else if (display === "operator") {
        numberDisplay.innerText += ` ${operator}`;
      } else if (num2.length === 0) {
        num1 = display;
        numberDisplay.innerText += ` ${display}`;
      } else {
        num2 = display;
        numberDisplay.innerText += ` ${display}`;
      }
      console.log(num1)
      console.log(num2)
      console.log(operator)
    });
  }
}

getNumber();
