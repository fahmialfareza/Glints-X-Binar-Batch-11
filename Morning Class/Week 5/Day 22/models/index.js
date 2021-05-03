const { MongoClient } = require("mongodb"); // Import MongoClient

const uri = process.env.MONGO_URI; // Address of Cluster or Server (MongoDB)

const connection = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // Make new connection

// Run the connection
connection
  .connect()
  .then(() => console.log("MongoDB connected!"))
  .catch((error) => console.error(error.message));

// Export connection
module.exports = connection;
