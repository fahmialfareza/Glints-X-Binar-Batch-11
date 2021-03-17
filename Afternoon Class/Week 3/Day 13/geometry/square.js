const TwoDimention = require("./twoDimention");

class Square extends TwoDimention {
  constructor(length) {
    super("Square");

    this.length = length;
  }

  // Overloading
  introduce(who) {
    super.introduce();
    console.log(`${who}, This is ${this.name}!`);
  }

  // Overridding
  calculateArea() {
    super.calculateArea();
    let area = this.length ** 2;

    console.log(`${this.name} area is ${area} cm2 \n`);
  }

  calculateCircumference() {
    super.calculateCircumference();
    let circumference = 4 * this.length;

    console.log(`${this.name} area is ${circumference} cm \n`);
  }
}

module.exports = Square;
