const EventEmitter = require("events"); // Import events module
const my = new EventEmitter(); // Declare new event

// Event Listener
function masIrvan() {
  console.log("Mas Irvan");
}

my.on("Mas Irvan", () => {
  console.log("Halo, Mas Irvan!");
});

my.on("Mas Ebit", () => {
  console.log("Halo, Mas Ebit!");
});

masIrvan();

my.emit("Mas Ebit"); // Event Emitter
my.emit("Mas Irvan");
