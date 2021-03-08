function calculateCubeVolume(length) {
  return length ** 3;
}

function calculateTubeVolume(radius, height) {
  return Math.PI * Math.pow(2, radius) * height;
}

console.log("Cube volume: " + calculateCubeVolume(10));
console.log("Tube volume: " + calculateTubeVolume(7, 10));
