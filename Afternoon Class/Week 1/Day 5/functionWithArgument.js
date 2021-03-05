// Function with argument and return
function f(x) {
  let result = x + 1;
  console.log("This is result");

  return result;
  console.log("Skip!");
}

let resultF = f(5); // It will not be printed
console.log(resultF);

// Function with argument and no-return
function z(x) {
  let result = x + 1;

  console.log(result);
  console.log("This is Z");

  // return result;
}

z(7); // Will be print 8
let resultZ = z(9); // Undefined
console.log(resultZ); // Undefined
