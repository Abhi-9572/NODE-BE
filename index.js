const express = require("express");
const app = express();
const port = 3000;

// Define a simple GET endpoint
app.get("/info", (req, res) => {
  res.json({
    name: "Abhishek Raj",
    designation: "Software Engineer",
    company: "Infor",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
