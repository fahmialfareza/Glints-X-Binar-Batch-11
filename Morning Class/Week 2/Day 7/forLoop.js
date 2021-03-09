// Basic for loop
let a = 0;

for (let i = 0; i <= 6; i++) {
  a += 2;
  console.log(a + "  perulangan ke-" + i);
}

// Fibonanci
let b = [0, 1];

for (let i = 0; i < 10; i++) {
  b[i + 2] = b[i] + b[i + 1];
  console.log(b[i + 2] + "  perulangan ke-" + i);
}

// Prime
for (var counter = 2; counter <= 20; counter++) {
  var notPrime = false;
  for (var i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    console.log(counter);
  }
}
