let corona = [
  {
    name: "John",
    status: "Positive",
  },
  {
    name: "Mike",
    status: "Suspect",
  },
  {
    name: "Fikri",
    status: "Positive",
  },
];

let option = "positive";

switch (option) {
  case "positive":
    // let positive = corona.filter((corona) => corona.status == "Positive");
    // console.log("Positive ===");
    // positive.map((person, index) =>
    //   console.log(`${index + 1}. ${person.name}`)
    // );

    // let counter = 0;
    for (let i = 0; i < corona.length; i++) {
      if (corona[i].status == "Positive") {
        // counter++;
        console.log(`${corona[i].name}`);
      }
    }
    break;
  case "suspect":
    let suspect = corona.filter((person) => person.status == "Suspect");
    console.log("Suspect ====");
    suspect.map((person, index) => console.log(`${index + 1}. ${person.name}`));
    break;
  default:
    console.log("Wrong option!");
}
