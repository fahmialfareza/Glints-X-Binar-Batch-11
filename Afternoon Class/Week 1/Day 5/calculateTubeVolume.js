// Function to calculate tube
function calculateTubeVolume(r, h) {
  let circleArea = Math.PI * r ** 2;
  let tubeVolume = circleArea * h;

  console.log("Tube volume: " + tubeVolume + " cm3.");

  return tubeVolume;
}

let tubeOne = calculateTubeVolume(7, 10);
let tubeTwo = calculateTubeVolume(14, 20);
let resultAB = tubeOne + tubeTwo;
console.log("Tube A + B: " + resultAB + " cm3.");

// Function to calculate tube with no-return
function calculateTubeVolumeNoReturn(r, h) {
  let circleArea = Math.PI * r ** 2;
  let tubeVolume = circleArea * h;

  console.log("Tube volume: " + tubeVolume + " cm3.");
}

let tubeThree = calculateTubeVolumeNoReturn(7, 10); // Undefined
let tubeFour = calculateTubeVolumeNoReturn(14, 20); // Undefined
let resultCD = tubeThree + tubeFour;
console.log("Tube C + D: " + resultCD + " cm3.");
