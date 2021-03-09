// This is object data type
let person = {
  name: "Fahmi Alfareza",
  address: "Magelang",
  age: 23,
  isMarried: false,
};

// The first way
console.log("Name: " + person.name); // Fahmi Alfareza

// Alternative way
console.log("Address: " + person["address"]);

// If else isMarried
if (person.isMarried == true) {
  // If person is married
  console.log("He's not single!");
} else {
  // Else it will go here
  console.log("He's still single!");
}
