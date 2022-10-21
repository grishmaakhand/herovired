const express = require("express");
const router = require("./routes/routes.js");
const app = express();
const mongoose = require("mongoose"); //step 2

mongoose.connect("mongodb://localhost:27017/demo"); //step 3 code line number1
const connection = mongoose.connection; //step 3 code line number2

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const userSchema = new mongoose.Schema({
  //step 4 code line number1
  userName: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  userBlog: {
    type: String,
    required: true,
  },
}); //step 4 code line till here

const userModel = connection.model("user", userSchema); //step 5

let userData = {
  userName: body.userName,
  userId: body.userId,
  userBlog: body.userBlog,
};

userModel.create(userData, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("data saved");
  }
});

app.listen(2000, () => {
  console.log("application working on 2000 port");
});
