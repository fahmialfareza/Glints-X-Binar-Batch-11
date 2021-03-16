const TwoDimention = require("./twoDimention");

class Square extends TwoDimention {
  constructor(length) {
    super("Square");
    this.length = length;
  }

  // Overridding method
  introduce() {
    super.introduce();
    console.log(`This is ${this.name} and ${this.type}`);
  }

  // Overloading
  calculateArea(message) {
    super.calculateArea();
    console.log(`${message}: ${this.length * this.length}`);
  }

  // Overridding
  calculateCircumference() {
    super.calculateCircumference();
    console.log(4 * this.length);
  }
}

let squareOne = new Square(10); // Declare object
squareOne.calculateArea("This area");
// squareOne.introduce();
