let fridge = ["Apple", "Wortel", "Milk", "Orange", "Leech", "Cabbage", "Egg"];

function goToKitchen() {
  console.log("Go to kitchen!");
}

function checkEggAvailability() {
  console.log("Check egg.....");

  if (!fridge.includes("Egg")) {
    console.log("The egg does not exist!");
    buyTheEgg();
  } else {
    console.log("The egg exists!");
  }
}

function buyTheEgg() {
  console.log("Go to market....");
  console.log("Buy the egg!");
}

function prepareTheFriyer() {
  console.log("Prepare the friyer!");
  console.log("Pour the oil!");
  console.log("Lit up the stove");
  console.log("Wait until the oil's getting hot");
}

function cookingTheEgg() {
  console.log("Break your egg and cook it until it's cooked");
}

function cookTheEgg() {
  goToKitchen();
  checkEggAvailability();
  prepareTheFriyer();
  cookingTheEgg();

  console.log("End!");
}

cookTheEgg();
