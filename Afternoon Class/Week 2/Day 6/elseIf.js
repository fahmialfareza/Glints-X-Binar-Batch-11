// Function to check alphabet rank
function checkValue(value) {
  if (value >= 80) {
    return "A"; // If value >= 80, It will return "A"
  } else if (value > 70) {
    return "B"; // If value > 70, It will return "A"
  } else if (value > 60) {
    return "D"; // If value > 60, It will return "A"
  } else {
    return "E"; // If all condition doesn't meet requirement, it will go here
  }
}

console.log(checkValue(80)); // "A"
console.log(checkValue(75)); // "B"
console.log(checkValue(50)); // "C"
