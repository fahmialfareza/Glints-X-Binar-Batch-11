// Import readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generate fullname by first and last name
function fullName(first, last) {
  return first + " " + last;
}

// Program start
console.log("Your Full Name");
// Make first name question
rl.question("First Name: ", (firstName) => {
  // Make last name question
  rl.question("Last Name: ", (lastName) => {
    console.log("Full Name: " + fullName(firstName, lastName)); // It will call fullName function

    rl.close();
  });
});

// Close rl after input all of specs
rl.on("close", () => {
  process.exit();
});
