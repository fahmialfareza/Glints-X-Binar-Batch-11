let fridge = [
  "Apple",
  "Wortel",
  "Milk",
  "Orange",
  "Leech",
  "Cabbage",
  "Egg"
]

function checkTheEggAvailability() {
  console.clear();
  console.log("Checking the egg availability...")

  // Check the egg availability
  if (fridge.includes("Egg")) {
    console.log("There's an egg")
    return false
  }

  // If we complete the loop and there's no egg
  console.log("There's no egg")
  return true
}

// Function to handle if we have to go to market or not
function goToTheMarket(shouldWe) {
  if (shouldWe) {
    console.log("Heading to the market");
    console.log("Buying an egg");
  }
}

// Function to prepare the fry
function prepareTheFry() {
  console.log("Pouring the oil");
  console.log("Lit up the stove");
}

// Fry the egg
function fryTheEgg() {
  console.log("Cook the egg");
}

// Go to kitchen and check the fridge
function cookAnEgg() {
  // Check if the egg is available
  let shouldWeGoToTheMarket = checkTheEggAvailability();

  // Check if we should go to the market or not
  goToTheMarket(shouldWeGoToTheMarket);
  prepareTheFry()
  fryTheEgg();
}

cookAnEgg()
