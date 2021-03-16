const TwoDimention = require("./twoDimention");

class Square extends TwoDimention {
  constructor(length) {
    super("Square");
    this.length = length;
  }

  // Overriding method
  introduce() {
    super.introduce();
    console.log(`This is ${this.name}`);
  }

  // Overloading method
  calculateArea(message) {
    super.calculateArea();
    console.log(`${message}: ${this.length * this.length}`);
  }
}

let squareOne = new Square(10);
squareOne.introduce();
squareOne.calculateArea("Square area");
