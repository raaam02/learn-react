const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const noteRoutes = require("./routes/notes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", noteRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/ink-flow")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.get("/", (req, res) => {
  res.send("Ink-Flow Backend");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
