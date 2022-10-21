const express = require("express");
const app = express();
const router = require("./routes/routes.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(5000, () => {
  console.log("5000 port is working ");
});
