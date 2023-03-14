const Mongoose = require("mongoose");
const Bcrypt = require("bcrypt");
const uniqueuser = require("mongoose-unique-validator");

const JobsSchema = new Mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Enter the name"],
    unique: true,
  },
  postion: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
});
JobsSchema.plugin(uniqueuser);

JobsSchema.pre("save", function (next) {
  const regi = this;
  Bcrypt.hash(regi.password, 10, (error, hash) => {
    regi.password = hash;
    next();
  });
});

const JobsModel = Mongoose.model("job", JobsSchema);
module.exports = JobsModel;
