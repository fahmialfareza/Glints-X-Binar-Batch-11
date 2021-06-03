require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// Express
const fs = require("fs");
const path = require("path");
const express = require("express");
const errorHandler = require("./middlewares/errorHandler");

// Security Package
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

// Import routes
const transactionRoute = require("./routes/transactionRoute");

// Make express app
const app = express();

// Body-parser to read req.body
app.use(express.json()); // Enable req.body JSON type
app.use(
  express.urlencoded({
    extended: true,
  })
); // Support urlencode body

// Add more security
// Sanitize data
app.use(mongoSanitize());

// Prevent XSS attact
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 mins
  max: 100,
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

// Set static file directory
app.use(express.static("public"));

// Make routes
app.use("/transactions", transactionRoute);

app.use(errorHandler);

// If environment is not test
if (process.env.NODE_ENV !== "test") {
  // Running server
  app.listen(process.env.PORT, () =>
    console.log("server running on port", process.env.PORT)
  );
}

// Export for unit testing
module.exports = app;
