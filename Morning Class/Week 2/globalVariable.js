// Global Variable
let a = 10; // Declare a
let message = "Hello, "; // Declare message

// This function can call the above variable
function hello() {
  // a = 20; // It can reassign the variable
  message = "Hello, You ";
  console.log(message + a);
}

// Function to change variable a
function changeA() {
  a = 15; // It will change a global variable
  message = "It will change a to ";
  console.log(message + a);
}

hello(); // Call the hello function
console.log(a);
changeA();  // Call the changeA function
console.log(a);
