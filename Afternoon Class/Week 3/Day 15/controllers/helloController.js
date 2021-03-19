class HelloController {
  get(req, res) {
    console.log("This is my first backend!");
    res.send(`Hello, Postman (GET), ${req.query.name}!`);
    // res.send(`Hello, Postman (GET), ${req.params.name}!`);
  }

  post(req, res) {
    console.log("This is example POST!");
    res.send("Hello, POST");
  }

  put(req, res) {
    console.log("This is example PUT!");
    res.send("Hello, PUT");
  }

  delete(req, res) {
    console.log("This is example DELETE!");
    res.send("Hello, DELETE");
  }
}

module.exports = new HelloController();
