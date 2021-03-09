// Or Operator
let a = 1;
let b = 2;

let c = 5;
let d = 5;

console.log(a == b || c == d); // true

let cd = a == b || [0, 1, 2] || "This is CD"; // It will save the first value
console.log(cd);
