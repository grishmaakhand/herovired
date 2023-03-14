const mongoose = require("mongoose");

const Db = process.env.ATLAS_URI;
// console.log(Db);
const Connection = mongoose.connect(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = Connection;
