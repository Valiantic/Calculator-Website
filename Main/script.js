const display = document.getElementById('result'); 
//declaring tha variable display then calling the id result to display the output

let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;
//assigning value to different variables

function appendNumber(number) { // function to put the number into the input
  if (waitingForSecondNumber) {
    display.value = number;
    waitingForSecondNumber = false;
  } else {
    display.value = display.value === '0' ? number : display.value + number;
  }
}

function decimal() { // function to display decimal
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function clearDisplay() { // function to erase the value within the input
  display.value = '0';
  firstNumber = null;
  operator = null;
  waitingForSecondNumber = false;

}

function operation(op) {  // operation to put 
  firstNumber = parseFloat(display.value);
  operator = op;
  waitingForSecondNumber = true;
}

function calculate() {  // calculation process
  if (operator === null || waitingForSecondNumber) {
    return;
  }
  const secondNumber = parseFloat(display.value);
  let result;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      if (secondNumber === 0) {
        alert("Error: Division by zero");
        return;
      }
      result = firstNumber / secondNumber;
      break;
    case '%':
        if (secondNumber === 0) {
          alert("Error: Division by zero");
          return;
        }
        result = firstNumber / secondNumber;
        break;
  }
  display.value = result;
  firstNumber = null;
  operator = null;
  waitingForSecondNumber = false;
}
