// This is array object
let person = {
  name: "Fahmi Alfareza",
  pets: [
    {
      name: "Jenny",
      type: "Cat",
    },
    {
      name: "Jessy",
      type: "Cat",
    },
  ],
  languages: ["Javanese", "Indonesian", "English"],
};

console.log("Name: " + person.name); // It will call the name of person
console.log("Pet Name: " + person.pets[0].name); // It will call Jenny
console.log("Language: " + person.languages[1]); // It will call Indonesian
