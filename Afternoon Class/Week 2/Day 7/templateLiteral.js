/* Template Literal */
let a = `Hello`;
let b = 5;

function world() {
  return "World";
}

console.log(`${a}, ${b} ${world()}!`);
console.log("${a}, ${b} ${world()}!")
console.log(a + ", " + b + " " + world() + "!");
console.log(a + ", " + b + " " + world() + "!");

// isNaN
let x = 13;
let y = "Hello";

console.log(!isNaN(x));
console.log(typeof y == "number");
