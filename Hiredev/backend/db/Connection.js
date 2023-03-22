const mongoose = require("mongoose");
const DbURL = process.env.MONGODB_URL;

const Connection = mongoose.connect(DbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = Connection;
