/* Return function */
function f(x) {
  let result = x * x;

  return result; // It will have a value for f(x) function
  console.log("Skip!");
}

/* No return function */
function z(x) {
  let result = x * x;

  console.log(result); // It just console.log
  console.log("Not Skipped!");
  // Doesn't have any value for this function
}

let variable = 20; // Like return function

// For f(x)
let resultF = f(5);
console.log(resultF + 10);
// console.log(z(10));

// For z(x)
// let resultZ = z(5);
// console.log(resultZ + 22);
// Or just like this
z(10); // You can call no return function with this code instead of call like f(x)
