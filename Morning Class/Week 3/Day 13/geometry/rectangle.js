const TwoDimention = require("./twoDimention");

class Rectangle extends TwoDimention {
  constructor(length, width) {
    super("Rectangle");
    this.length = length;
    this.width = width;
  }

  // Overloading method
  introduce(who) {
    super.introduce();
    console.log(`${who}, this is ${this.name} \n`);
  }

  // Overridding
  calculateArea() {
    super.calculateArea();
    let area = this.length * this.width;

    console.log(`This area is ${area} cm2 \n`);
  }

  calculateCircumference() {
    super.calculateCircumference();
    let circumference = 2 * (this.length + this.width);

    console.log(`This circumference is ${circumference} cm \n`);
  }
}

module.exports = Rectangle;
