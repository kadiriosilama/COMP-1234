// Create variables to store total and operation
var total, operation;

// Prompt the user for two numbers
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));

// Prompt the user to choose an arithmetic operation
var operator = prompt("Choose an operation (+, -, *, /):");

// Perform the calculation based on the chosen operation
switch (operator) {
    case '+':
        total = num1 + num2;
        break;
    case '-':
        total = num1 - num2;
        break;
    case '*':
        total = num1 * num2;
        break;
    case '/':
        if (num2 !== 0) {
            total = num1 / num2;
        } else {
            console.error("Cannot divide by zero");
            // You might want to handle this error more gracefully, e.g., display an error message to the user
        }
        break;
    default:
        console.error("Invalid Operation");
        // You might want to handle this error more gracefully, e.g., display an error message to the user
}

// Display the result in the HTML element with ID 'displayTotal'
document.getElementById('displayTotal').innerHTML += `total`;

