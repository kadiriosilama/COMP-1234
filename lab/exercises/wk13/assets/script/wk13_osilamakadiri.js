
// calculator.js

// Create variables to store total and operation
var total, operation;

// Prompt the user for two numbers
var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));

// Prompt the user to choose an arithmetic operation
var operator = prompt("Choose an operation (+, -, *, /):");

// Use if, else if to calculate the total based on the user's input
if (operator === "+") {
  total = num1 + num2;
  operation = " + ";
} else if (operator === "-") {
  total = num1 - num2;
  operation = " - ";
} else if (operator === "*") {
  total = num1 * num2;
  operation = " * ";
} else if (operator === "/") {
  total = num1 / num2;
  operation = " / ";
} else {
  // invalid operator
  document.write("Invalid operator");
}

// Display the result using document.write
document.write("<strong>" ,num1 + operation + num2 + " = " + total ,"</strong>");

/*create a variable to store a total and another to store an operation.
c. prompt (input) the user for two numbers and store the values in separate
variables (you use two prompts).
d. prompt the user to choose an arithmetic operation (+, -, *, /)
e. using an if, else if calculate the total using the users numbers and operation,
place the outcome in the variable total..
f. use document write to display a message, num1 operation num2 = total where
num1 operation num2 and total are the values derived from the variables and are
concatenated together. . e.g. 2 * 3*/