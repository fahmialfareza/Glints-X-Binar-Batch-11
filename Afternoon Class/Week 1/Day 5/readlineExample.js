// Import readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fullName(first, last) {
  return first + " " + last;
}

console.log("Your Full Name");
rl.question("What's your first name? ", (firstName) => {
  rl.question("What's your last name? ", (lastName) => {
    console.log("Your fullname: " + fullName(firstName, lastName));

    rl.close();
  });
});

rl.on("close", () => {
  process.exit();
});
