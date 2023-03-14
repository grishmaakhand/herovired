const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const Connection = require("./db/connection");
if (Connection) {
  console.log("connected to mongodb");
}

const app = express();
app.listen(3000, () => {
  console.log("Server is runnig on 3000 port");
});
