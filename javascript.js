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
