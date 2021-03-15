const EventEmitter = require("events"); // Import events module
const my = new EventEmitter();

// Event Listener
my.on("Mas Abi", () => {
  console.log("Some Event Happened with Mas Abi!");
});

// Call Event Listener
my.emit("Mas Abi");
my.emit("Mas Abi");
