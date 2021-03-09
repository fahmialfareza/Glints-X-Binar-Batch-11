// Global varible
let a = 10;
let message = "Hello, World!";

// Function to change varible a
function changeA() {
  a = 30;
  console.log(a);
}

// Function to change varible message
function changeMessage() {
  message = "Hello, Changes!";
  console.log(message);
}

changeA(); // Call changeA function
changeMessage(); // Call changeMessage function

console.log(a);
console.log(message);
