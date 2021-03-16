const Geometry = require("./geometry");

class TwoDimention extends Geometry {
  constructor(name) {
    super(name, "2D");
  }

  // Overriding method
  introduce() {
    super.introduce();
    console.log(`This is ${this.type}`);
  }

  calculateArea() {
    console.log("This area!");
  }
}

module.exports = TwoDimention;
