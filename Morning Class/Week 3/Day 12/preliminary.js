// Declare class
class Person {
  static isAlive = true; // static property

  // constructor
  constructor(name, address, isMarried, nickName) {
    this.name = name;
    this.address = address;
    this.isMarried = isMarried;
    this.nickName = nickName;
  }

  // Instance method
  walk() {
    console.log(`${this.nickName} is walking!`);
  }

  // Instance method
  run() {
    console.log(`${this.nickName} is running!`);
  }

  // Call another function in one class
  jogging() {
    this.walk();
    this.run();
  }

  // Static method, can not call the inctance property
  static talk(message) {
    console.log(`Someone talk, "${message}"`);
  }

  // Update address
  changeAddress(address) {
    this.address = address;
  }
}

// Add intance method
Person.prototype.watch = function () {
  console.log(`${this.nickName} is watching football!`);
};

// Add static method
Person.sleep = function () {
  console.log("Someone is sleeping!");
};

let person1 = new Person("Fahmi Alfareza", "Magelang", false, "Reza"); // declare object
let person2 = new Person("Abraham", "Jakarta", true, "Abi"); // declare object

console.log(person1); // object data type
person1.jogging(); // run function of object
person1.watch(); // call watch method
person2.walk(); // run function of object
person1.changeAddress("Yogyakarta"); // Update address with function
person1.address = "Bandung"; // Update directly to object
console.log(person1);

// console.log(person2.isAlive); // undefined
console.log(Person.isAlive); // static can only run directly by the origin class
Person.talk("Hey, You!"); // call static method
Person.sleep();
