let fridge = ["Apple", "Wortel", "Milk", "Orange", "Leech", "Cabbage"];

function checkTheEggAvailability() {
  if (!fridge.includes("Egg")) {
    console.log("The egg doesn't exist!");
    buyTheEgg();
  } else {
    console.log("The egg exists!");
  }
}

function buyTheEgg() {
  console.log("Go to market!");
  console.log("Buy the egg!");
}

function prepareTheFriyer() {
  console.log("Prepare the friyer!");
  console.log("Lit up the stove!");
  console.log("Wait until the oil's getting hot!");
}

function cooking() {
  console.log("Break your egg and cook it until it's cooked!");
}

function cookTheEgg() {
  checkTheEggAvailability();
  prepareTheFriyer();
  cooking();

  console.log("Done!");
}

cookTheEgg();
