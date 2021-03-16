const Geometry = require("./geometry");

class TwoDimention extends Geometry {
  constructor(name) {
    super(name, "2D");
  }

  // Overridding method
  introduce() {
    super.introduce();
    console.log(`Hello, I'm ${this.type}`);
  }

  calculateArea() {
    console.log(`${this.name} Area!`);
  }

  calculateCircumference() {
    console.log(`${this.name} Circumference!`);
  }
}

module.exports = TwoDimention;
