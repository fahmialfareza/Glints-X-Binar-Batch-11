let data = [0, 1, 2];

[data[0], data[1]] = [data[1], data[0]];

console.log(data);

let newData = data.filter((dat) => dat > 0);

console.log(newData);
