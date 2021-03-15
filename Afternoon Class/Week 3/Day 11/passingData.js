const EventEmitter = require("events");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const my = new EventEmitter();

// Event Listener
my.on("Login Failed", (email, password) => {
  console.log(`${email} and ${password} is failed to login!`);
  rl.close();
});

my.on("Login Success", (email) => {
  console.log(`${email} is success to login!`);
  require("../../Week 2/Day 10/assignment2"); // Add this line
  rl.close();
});

function login(email, password) {
  const emailInDatabase = "reza@email.com";
  const passwordInDatabase = 123456;

  if (email == emailInDatabase && password == passwordInDatabase) {
    my.emit("Login Success", email);
  } else {
    my.emit("Login Failed", email, password);
  }
}

rl.question("Email: ", (email) => {
  rl.question("Password: ", (password) => {
    login(email, password);
  });
});
