const express = require("express");
const app = express();
const helloRoute = require("./routes/helloRoute");

app.use("/", helloRoute);

app.listen(3000, () => console.log("Server running on 3000!"));
