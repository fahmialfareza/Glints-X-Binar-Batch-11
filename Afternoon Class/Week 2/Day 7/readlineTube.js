// Import readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Functio to calculate cube volume
function calculateTubeVolume(radius, height) {
  return Math.PI * Math.pow(2, radius) * height;
}

function inputRadius() {
  rl.question("Radius: ", (radius) => {
    if (!isNaN(radius)) {
      inputHeight(radius);
    } else {
      console.log("Radius must be a number! \n");
      inputRadius();
    }
  });
}

function inputHeight(radius) {
  rl.question("Height: ", (height) => {
    if (!isNaN(height)) {
      console.log(`The volume is ${calculateTubeVolume(radius, height)}`);

      rl.close();
    } else {
      console.log("Height must be a number! \n");
      inputHeight(radius);
    }
  });
}

inputRadius();
