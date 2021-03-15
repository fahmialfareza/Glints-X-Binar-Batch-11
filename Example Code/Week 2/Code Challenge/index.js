const data = require("./lib/arrayFactory.js");
const test = require("./lib/test.js");

/*
 * Code Here!
 * */

// Optional
function clean(data) {
  return data.filter((i) => typeof i === "number");
}

// Should return array
function sortAscending(data) {
  data = clean(data);

  // Code Here
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i; j++) {
      if (data[j] > data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
  }

  return data;
}

// Should return array
function sortDecending(data) {
  // Code Here
  data = clean(data);

  // Code Here
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i; j++) {
      if (data[j] < data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
  }

  return data;
}

// DON'T CHANGE
test(sortAscending, sortDecending, data);
