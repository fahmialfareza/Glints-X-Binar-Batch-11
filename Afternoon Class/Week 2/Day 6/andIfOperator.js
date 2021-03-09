/* The first way */
// Declare variable
let c = 5;
let d = 5;

let result; // declare result

if (c == d) {
  // If c == d, go here
  result = "c is equal to d!";
}

console.log(result); // print result

/* The second way */
result = c == d && "c is equal to d!"; // It will return end of value

console.log(result);
