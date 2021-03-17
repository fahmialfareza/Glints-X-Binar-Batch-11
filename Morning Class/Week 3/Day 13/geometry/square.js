const TwoDimention = require("./twoDimention");

class Square extends TwoDimention {
  constructor(length) {
    super("Square");
    this.length = length;
  }

  // Overloading method
  introduce(who) {
    super.introduce();
    console.log(`${who}, this is ${this.name} \n`);
  }

  // Overridding
  calculateArea() {
    super.calculateArea();
    let area = this.length ** 2;

    console.log(`This area is ${area} cm2 \n`);
  }

  calculateCircumference() {
    super.calculateCircumference();
    let circumference = 4 * this.length;

    console.log(`This circumference is ${circumference} cm \n`);
  }
}

module.exports = Square;
