const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 5000;

mongoose
  .connect(
    "mongodb+srv://praful:praful123@cluster0.ojdqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
