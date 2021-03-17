const { Square, Rectangle } = require("./geometry");

let squareOne = new Square(12);
squareOne.calculateArea();

let rectangleOne = new Rectangle(11, 12);
rectangleOne.calculateArea();
rectangleOne.calculateCircumference();
