// Importing Module
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Code here!

/*
 * This function is being used to greet people
 * The result of that function should be:
 * "Hello, <name>, looks like you're <age>! And you lived in <city>!"
 *
 * HINT:
 * To get the current year, let say 2020;
 * You can use this code
 *
 * const currentDate = new Date();
 * const currentYear = currentDate.getFullYear();
 * */
function greet(name, address, birthday) {
  // Insert your code here!
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const age = currentYear - birthday;
  console.log(
    "Hello, " +
      name +
      "! Looks like you're " +
      age +
      " years old, and you lived in " +
      address +
      "!"
  );
}

// DON'T CHANGE
console.log("Goverment Registry\n");
// GET User's Name
rl.question("What is your name? ", (name) => {
  // GET User's Address
  rl.question("Which city do you live? ", (address) => {
    // GET User's Birthday
    rl.question("When was your birthday year? ", (birthday) => {
      greet(name, address, birthday);

      rl.close();
    });
  });
});

rl.on("close", () => {
  process.exit();
});
