const mongoose = require("mongoose");

const DevSchema = new mongoose.Schema({
  name: String,
  password: String,
  phone: String,
  email: String,
  technologies: Array,
});

const DevModel = mongoose.model("developers", DevSchema);

module.exports = DevModel;
