// Import readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to calculate beam volume
function calculateBeamVolume(length, width, height) {
  return length * width * height;
}

function input() {
  rl.question("Length: ", function (length) {
    rl.question("Width: ", (width) => {
      rl.question("Height: ", (height) => {
        if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
          console.log(
            `Beam volume is ${calculateBeamVolume(
              length,
              width,
              height
            )} cm3 \n`
          );

          rl.close();
        } else {
          console.log("The input must be number! \n");
          input();
        }
      });
    });
  });
}

input();
