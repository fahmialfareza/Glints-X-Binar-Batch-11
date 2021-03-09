/* The first way */
// Declare variable
let c = 5;
let d = 6;

let result; // Declare result variable

if (c == d) {
  // If c value is equal to d value
  result = "c is equal to d";
} else {
  // Else
  result = "c is not equal to d";
}

console.log(result); // Will be printing the result

/* Alternative way (front end) */
let e = 5;
let f = 5;

result = e == f && "c is equal to d"; // If all condition true, it will save the end of value

console.log(result); // It will print the result
