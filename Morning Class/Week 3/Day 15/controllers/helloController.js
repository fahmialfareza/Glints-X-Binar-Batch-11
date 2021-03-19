class HelloController {
  // If user uses GET method
  get(req, res) {
    // app.get("/:name", (req, res) => {
    console.log("This is for Terminal 1!");
    console.log("This is for Terminal 2!");
    // res.send(`This is response for ${req.params.name}!`);
    res.send(`This is response for ${req.query.name}!`);
  }

  // If user uses POST method
  post(req, res) {
    console.log("Usually used to add data!");
    res.send(`This is POST!`);
  }

  // If user uses PUT method
  put(req, res) {
    console.log("Usually used to update data!");
    res.send("This is PUT!");
  }

  // If user uses DELETE method
  delete(req, res) {
    console.log("Usually used to delete data!");
    res.send("This is DELETE!");
  }
}

module.exports = new HelloController();
