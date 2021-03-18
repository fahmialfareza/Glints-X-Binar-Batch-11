const { Square, Rectangle } = require("./geometry");

let trySquare = new Square(17);
let prism = trySquare.calculateArea() * 10;
console.log(`Prism: ${prism}`)
trySquare.introduce("Reza");

let tryRectangle = new Rectangle(11, 12);
tryRectangle.calculateArea();
