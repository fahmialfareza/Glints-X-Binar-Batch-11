/* Template Literal */
let message = "Hello";
let count = 10;

function hello() {
  return "haiii";
}

let result = hello() + ", " + message + " " + count + "!";
let resultExtra = `${hello()}, ${message} ${count}!`;
let helloWorld = `Hello, World!`;
let resultWrong = "${hello()}, ${message} ${count}!";

console.log(result);
console.log(resultExtra);
console.log(resultWrong);
console.log(helloWorld);
