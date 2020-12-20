require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("*", (req, res, next) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("Server is started at ", process.env.PORT);
});
