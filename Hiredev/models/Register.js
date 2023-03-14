const Mongoose = require("mongoose");
const Bcrypt = require("bcrypt");

const RegisterSchema = new Mongoose.Schema({
  uname: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  pword: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  technologies: {
    type: String,
    required: true,
    unique: true,
  },
});

RegisterSchema.pre("save", function (next) {
  const regi = this;
  Bcrypt.hash(regi.pword, 10, (error, hash) => {
    regi.pword = hash;
    next();
  });
});

const RegisterModel = new Mongoose.Model("register", RegisterSchema);
module.exports = RegisterModel;
