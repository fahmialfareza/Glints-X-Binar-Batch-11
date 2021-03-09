let message = "Hello!"; // Global variable

function hello() {
  let message = "Hello, Reza!"; // This variable is belong to hello function
  console.log(message); // Priority for local variable
}

function world() {
  let message = "Hello, World!"; // This variable is belong to hello function
  console.log(message); // Priority for local variable
}

hello(); // Call hello function
world(); // Call world( function)

console.log(message); // This will call global variable message
