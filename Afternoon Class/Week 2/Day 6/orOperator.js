// Declare variable
let a = 1;
let b = 2;

let c = 5;
let d = 5;

console.log(a == b || c == d); //true
console.log(a == b || c == a); //false

// Or
let cd = a == b || [0, 1, 2] || "this new cd"; // It will return the first true
console.log(cd);
