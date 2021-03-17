const Geometry = require("./geometry");

class TwoDimention extends Geometry {
  constructor(name) {
    super(name, "2D");

    if (this.constructor == TwoDimention) {
      throw new Error("Can not declare object!");
    }
  }

  // Overridding
  introduce() {
    super.introduce();
    console.log(`This is ${this.type}!`);
  }

  calculateArea() {
    console.log(`${this.name} Area!`);
  }

  calculateCircumference() {
    console.log(`${this.name} Circumference!`);
  }
}

module.exports = TwoDimention;
