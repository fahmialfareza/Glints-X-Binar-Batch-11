const TwoDimention = require("./twoDimention");

class Triangle extends TwoDimention {
  constructor(base, height) {
    super("Triangle");

    this.base = base;
    this.height = height;
  }

  // Overloading
  introduce(who) {
    super.introduce();
    console.log(`${who}, This is ${this.name}!`);
  }

  // Overridding
  calculateArea() {
    super.calculateArea();
    let area = (this.base * this.height) / 2;

    console.log(`${this.name} area is ${area} cm2 \n`);
  }

  calculateCircumference() {
    super.calculateCircumference();
    let circumference = 3 * this.base;

    console.log(`${this.name} area is ${circumference} cm \n`);
  }
}

module.exports = Triangle;
