const express = require("express");
const phones = require("./phones.json");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("my phonessss info coming soon");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});
// dynamic id route
app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("need info for id:", id);
  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log(`my phone server is running on port: ${port} `);
});