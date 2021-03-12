let people = [
  {
    name: "John",
    status: "Positive",
  },
  {
    name: "Bayu",
    status: "Suspect",
  },
  {
    name: "Alfian",
    status: "Positive",
  },
];

let option = "Positive";

switch (option) {
  case "Positive":
    // people
    //   .filter((person) => person.status == "Positive")
    //   .map((person, index) => {
    //     console.log(`${index + 1}. ${person.name}`);
    //   });

    let counter = 0;
    for (var i = 0; i < people.length; i++) {
      if (people[i].status == "Positive") {
        counter++;
        console.log(counter + ". " + people[i].name);
      }
    }

    break;
  case "Suspect":
    people
      .filter((person) => person.status == "Suspect")
      .map((person, index) => {
        console.log(`${index + 1}. ${person.name}`);
      });
    break;
  default:
}
