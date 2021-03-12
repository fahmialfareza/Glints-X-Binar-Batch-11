let fridge = ["Apple", "Carrot", "Milk", "Orange", "Leech", "Cabbage"];

console.log(fridge.includes("Apple" || "Cabbage")); // true because Apple exists
console.log(fridge.includes("Banana")); // false because Banana doesn't exist

// Manual case-insensetive
for (var i = 0; i < fridge.length; i++) {
  if (fridge[i].toLowerCase() == "apple") {
    console.log(true);
  }
}
