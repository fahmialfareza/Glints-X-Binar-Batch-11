const express = require("express"); // Import express
const app = express(); // Make express app
const helloRouter = require("./routes/helloRoute"); // Import helloRoute

/* If user go to http://localhost:3000
It will go to helloRoute*/
app.use("/", helloRouter);

// This is port for this server
app.listen(5000, () => console.log("Server Running on 3000!"));
