// Declare class
class Person {
  static isAlive = true; // static property

  // constructor and instance property
  constructor(name, address, isMarried, nickName) {
    this.name = name;
    this.address = address;
    this.isMarried = isMarried;
    this.nickName = nickName;
  }

  // Intance method
  walk() {
    console.log(`${this.name} is walking!`);
  }

  // Instance method
  run() {
    console.log(`${this.nickName} is running!`);
  }

  // Instance method that calling another function
  jogging() {
    this.walk();
    this.run();
  }

  // Static method
  static isEating() {
    console.log(`Someone is eating!`);
  }
}

// Instance method outside class
Person.prototype.watch = function () {
  console.log(`${this.name} is watching football match!`);
};

// Add Static method outside class
Person.sleep = function () {
  console.log(`Someone is sleeping!`);
};

let person1 = new Person("Ebit Neygo", "Medan", true, "Ebit"); // declare object
let person2 = new Person("Riyo Ginting", "Medan", false, "Riyo"); // declare object
person1.jogging();
person1.watch();
// console.log(person1.isAlive); // Can not call static property
console.log(Person.isAlive); // static property can only call by class directly

// person1.isEating(); // Can not call static method
Person.isEating(); // static method can only called by class directly
Person.sleep();
