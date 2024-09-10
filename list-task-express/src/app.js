const express = require("express");
const bodyParser = require("body-parser");
const client = require("./config/dbConfig");
const cors = require("cors");
const taskRoutes = require("./routes/TaskRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to PostgreSQL
client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((err) => {
    console.error("Connection error", err.stack);
  });

// for cors
app.use(cors());

// Use task routes
app.use("/api/tasks", taskRoutes); // Use taskRoutes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
