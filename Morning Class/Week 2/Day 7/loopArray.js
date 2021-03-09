let fruits = ["Apple", "Banana", "Orange", "Mango", "Melon"];
console.log(fruits.length);

// For Array
for (let i = 0; i < fruits.length; i++) {
  if (i % 2 === 0) console.log(fruits[i]);
}

// While array
let i = 0;

while (i < fruits.length) {
  if (i % 2 == 1) console.log(fruits[i]);
  i++;
}
