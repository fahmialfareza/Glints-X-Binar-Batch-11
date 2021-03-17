class Geometry {
  constructor(name, type) {
    if (this.constructor == Geometry) {
      throw new Error("Can not declare object!");
    }

    this.name = name;
    this.type = type;
  }

  introduce() {
    this.#accessIntroduce();
  }

  // Private function
  #accessIntroduce() {
    console.log("This is Geometry!");
  }
}

module.exports = Geometry;
