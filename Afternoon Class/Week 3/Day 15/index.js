const express = require("express"); // Import express
const app = express(); // Make express app
const helloRoute = require("./routes/helloRoute"); // Import helloRoute

/* If user go to http://localhost:3000
It will go to here*/
app.use("/", helloRoute);

// This is port for this server
app.listen(3000, () => console.log("Server running on 3000!"));
