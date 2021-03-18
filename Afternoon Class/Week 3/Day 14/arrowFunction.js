// Normal function
function calculate(x, y) {
  return x * y;
}

console.log(calculate(10, 11));

// Arrow Function
const calc = (x, y) => {
  return x * y;
};

console.log(calc(10, 11));

// Currying function
const calcu = (x) => (y) => (z) => {
  return x * y * z;
};

console.log(calcu(10)(11)(12));

// Arrow function return
const cal = (x, y) => x * y;

console.log(cal(10, 11));
