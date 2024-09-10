const client = require("./config/dbConfig");

const testConnection = async () => {
  try {
    // Connect to the database
    await client.connect();
    console.log("Connection successful");

    // Test the connection by executing a simple query
    const res = await client.query("SELECT NOW()");
    console.log("Current time:", res.rows[0]);
  } catch (err) {
    console.error("Connection error:", err.stack);
  } finally {
    // Close the connection
    await client.end();
  }
};

testConnection();
