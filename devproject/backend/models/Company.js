const Mongoose = require("mongoose");
const Bcrypt = require("bcrypt");
const uniqueuser = require("mongoose-unique-validator");

const CompanySchema = new Mongoose.Schema({
  companyName: {
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
});
CompanySchema.plugin(uniqueuser);

CompanySchema.pre("save", function (next) {
  const regi = this;
  Bcrypt.hash(regi.password, 10, (error, hash) => {
    regi.password = hash;
    next();
  });
});

const CompanySchemaModel = Mongoose.model("company", CompanySchema);
module.exports = CompanySchemaModel;
