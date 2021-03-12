let fridge = ["tomato", "brocolli", "kale", "cabbage", "apple"];

// Manual
for (var i = 0; i < fridge.length - 1; i++) {
  console.log(
    `${fridge[i]} is a healthy food, it's definitely worth to eat!`
  );
}

// Apple is not vegetable
for (var i = 0; i < fridge.length; i++) {
  if (fridge[i] == "apple") {
    console.log(`${fridge[i]} isn't vegetable!`);
  } else {
    console.log(
      `${fridge[i]} is a healthy food, it's definitely worth to eat!`
    );
  }
}

// Using filter and map
let fridgeFilter = fridge.filter((vegetable) => vegetable !== "apple");
fridgeFilter.map((vegetable) =>
  console.log(`${vegetable} is a healthy food, it's definitely worth to eat!`)
);

// Using pop
fridge.pop();
for (var i = 0; i < fridge.length; i++) {
  console.log(
    `${fridge[i]} is a healthy food, it's definitely worth to eat!`
  );
}
