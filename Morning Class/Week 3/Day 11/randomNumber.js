const randomNumber = Math.floor(Math.random() * 100);

let data = [];

for (var i = 0; i < randomNumber; i++) {
  data.push(createArrayElement());
}

function createArrayElement() {
  let randomData = Math.floor(Math.random() * 1000);
  let chooseNullOrNumber = Math.floor(Math.random() * 3);

  return [null, randomData, 1][chooseNullOrNumber];
}

console.log(data);
