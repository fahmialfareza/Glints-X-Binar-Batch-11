/* Tube with return */
function calculateTubeVolume(r, h) {
  let circleArea = Math.PI * r ** 2;
  let tubeVolume = circleArea * h;

  return tubeVolume;
}

let tubeA = calculateTubeVolume(7, 10);
let tubeB = calculateTubeVolume(14, 20);
let resultAB = tubeA + tubeB;

console.log("Tube A + Tube B: " + resultAB + " cm3.");

/* Tube with no return */
function calculateTubeVolumeNoReturn(r, h) {
  let circleArea = Math.PI * r ** 2;
  let tubeVolume = circleArea * h;

  console.log("Tube volume: " + tubeVolume);
}

let tubeC = calculateTubeVolumeNoReturn(7, 10);
let tubeD = calculateTubeVolumeNoReturn(14, 20);
let resultCD = tubeC + tubeD;

console.log("Tube C + Tube D: " + resultCD + " cm3.");
