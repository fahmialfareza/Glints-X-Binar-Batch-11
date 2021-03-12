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

for (var i = 0; i < people.length; i++) {
  if(people[i].status == "Positive") {
    console.log(people[i].name)
  }
}
