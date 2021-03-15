const EventEmitter = require("events"); // Import events module
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const my = new EventEmitter();

// Make an event Listener
my.on("Login Failed", (email, password) => {
  console.log(`${email} and ${password} is failed to login!`);
  rl.close();
});

my.on("Login Success", (email) => {
  console.log(`${email} login!`);

  require("../../Week 2/Day 10/assignment-2");

  rl.close();
});

function login(email, password) {
  const passwordStoredInDatabase = "123456";

  if (password != passwordStoredInDatabase) {
    my.emit("Login Failed", email, password);
  } else {
    my.emit("Login Success", email);
  }
}

rl.question("Email: ", (email) => {
  rl.question("Password: ", (password) => {
    login(email, password);
  });
});
