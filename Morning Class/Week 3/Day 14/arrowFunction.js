// Normal Fucntion
function calc(a, b) {
  return a * b;
}

console.log(calc(11, 12));

// Arrow Function
const calcArrow = (x, y) => {
  return x * y;
};

console.log(calcArrow(11, 12));

// Currying Function
const calculate = (x) => (y) => (z) => {
  return x * y * z;
};

console.log(calculate(11)(12)(13));

// Addition
const App = () => {
  const abi = () => {
    return "Abi";
  };

  return abi();
};

console.log(App());
