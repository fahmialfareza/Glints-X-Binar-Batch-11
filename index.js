require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const fs = require("fs");
const path = require("path");
// Express
const express = require("express");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Security Packages
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

// Import routes
const authRoute = require("./routes/authRoute");

//Set body parser for HTTP post operation
app.use(express.json()); // support json encoded bodies
app.use(
  express.urlencoded({
    extended: true,
  })
); // support encoded bodies

// Prevent XSS attact
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 mins
  max: 60,
});

app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Use helmet
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// CORS
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  // create a write stream (in append mode)
  let accessLogStream = fs.createWriteStream(
    path.join(__dirname, "access.log"),
    {
      flags: "a",
    }
  );

  // setup the logger
  app.use(morgan("combined", { stream: accessLogStream }));
}

app.use("/auth", authRoute);

app.use(errorHandler);

// Server running
if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT, () =>
    console.log("server running on port", process.env.PORT)
  );
}

module.exports = app;
