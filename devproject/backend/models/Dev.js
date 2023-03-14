const Mongoose = require("mongoose");
const Bcrypt = require("bcrypt");
const uniqueuser = require("mongoose-unique-validator");

const DevSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the name"],
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "Enter the password"],
  },
  technologies: {
    type: Array,
    required: true,
  },
});
DevSchema.plugin(uniqueuser);

DevSchema.pre("save", function (next) {
  const regi = this;
  Bcrypt.hash(regi.password, 10, (error, hash) => {
    regi.password = hash;
    next();
  });
});

const DevModel = Mongoose.model("dev", DevSchema);
module.exports = DevModel;
