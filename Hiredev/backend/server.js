const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5001;
const router = require("./routes/HireDevRoutes");

const Connection = require("./db/Connection");
app.use(cors());
app.use(express.json());

app.use("/api/", router);

if (Connection) {
  console.log("DB Connected");
  app.listen(port, () => console.log(`Server Running on PORT: ${port}`));
} else {
  console.log("DB Connection Failed");
}
