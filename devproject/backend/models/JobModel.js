const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  name: String,
  jtitle: String,
  technologies: Array,
});

const JobModel = mongoose.model("jobs", JobSchema);

module.exports = JobModel;
