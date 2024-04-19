const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("This is my first ever server");
});
app.get("/data", (req, res) => {
  res.send("more data coming soon");
});

app.listen(port, () => {
  console.log(`my project running on port: ${port}`);
});
// on cmd command : node index.js (the file name)
// then check on browser : localhost:5000
