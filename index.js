const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

let items = [
  {
    id: 1,
    name: "Abhishek Raj",
    designation: "Software Engineer",
    company: "Infor",
  },
];
let currentId = 1;

// Define a simple GET endpoint
app.get("/item", (req, res) => {
  res.status(200).json(items);
});

app.post("/item", (req, res) => {
  const newItem = { id: currentId++, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.get("/item/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.status(200).json(item);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
