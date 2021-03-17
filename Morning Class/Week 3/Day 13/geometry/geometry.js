class Geometry {
  constructor(name, type) {
    // Make abstract class
    if (this.constructor == Geometry) {
      throw new Error("Can not make object!");
    }

    this.name = name;
    this.type = type;
  }

  introduce() {
    this.#accessIntroduce();
  }

  // Private that can only accessed in this class
  #accessIntroduce() {
    console.log("Hello, this is Geometry");
  }
}

module.exports = Geometry;
