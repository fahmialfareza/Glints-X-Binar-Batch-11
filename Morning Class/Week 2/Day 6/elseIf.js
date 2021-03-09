// Check function
function check(value) {
  if (value >= 80) {
    return "A"; // If value more than 80 it will return "A"
  } else if (value > 70) {
    return "B"; // If value more than 70 it will return "B"
  } else if (value > 60) {
    return "C"; // If value more than 60 it will return "A"
  } else {
    return "D"; // else, it will return "A"
  }
}

console.log(check(90)); // "A"
console.log(check(75)); // "B"
console.log(check(50)); // "D"
