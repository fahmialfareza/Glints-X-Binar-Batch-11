const data = [];
const randomNumber = Math.floor(Math.random() * 20);

console.log(randomNumber);

for (var i = 0; i < randomNumber; i++) {
  data.push(createArrayElement());
}

function createArrayElement() {
  let dataRandom = Math.floor(Math.random() * 1000);

  return [null, dataRandom, 1][Math.floor(Math.random() * 3)];
}

console.log(data);
