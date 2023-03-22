const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: String,
  password: String,
  phone: String,
  email: String,
  technologies: Array,
});

const CompanyModel = mongoose.model("companies", CompanySchema);

module.exports = CompanyModel;
