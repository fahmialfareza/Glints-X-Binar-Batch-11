// Object data type
let person = {
  name: "Fahmi Alfareza",
  address: "Magelang",
  isMarried: false,
  age: 23,
};

// console.log(person); // It will print the person variable

console.log("Name: " + person.name); // The first way

console.log("Address: " + person["address"]); // The alternative way

if (person.isMarried == true) {
  // If person is married
  console.log(person.name + " has been married!");
} else {
  // If person isn't married
  console.log(person.name + " has not been married!");
}
