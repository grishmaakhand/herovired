const express = require("express");
const cors = require("cors");
const Mongoose = require("mongoose");
const PageController = require("./controllers/PageController");

const app = express();
app.listen(5001, () => console.log("Server running on 5001"));

Mongoose.connect("mongodb://localhost/hiredev", {
  useNewUrlParser: true,
})
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log(error);
  });
app.use(cors());
app.use(express.json());
//required when using form
app.use(express.urlencoded());

//paths
app.get("/", PageController.homePage);
app.post("/hire-developer", PageController.hireDeveloper);
app.post("/register-developer", PageController.registerDeveloper);
app.post("/login", PageController.login);
app.post("/post-job", PageController.postJob);

//Fetch Developers
app.get("/dev-list", PageController.devList);
app.get("/comp-list", PageController.compList);
app.get("/job-list", PageController.jobList);
