const TwoDimention = require("./twoDimention");

class Rectangle extends TwoDimention {
  constructor(base, height) {
    super("Rectangle");
    this.base = base;
    this.height = height;
  }

  // Overloading method
  introduce(who) {
    super.introduce();
    console.log(`${who}, this is ${this.name} \n`);
  }

  // Overridding
  calculateArea() {
    super.calculateArea();
    let area = this.base * this.height / 2;

    console.log(`This area is ${area} cm2 \n`);
  }

  calculateCircumference() {
    super.calculateCircumference();
    let circumference = 3 * this.base;

    console.log(`This circumference is ${circumference} cm \n`);
  }
}

module.exports = Rectangle;
