const DevModel = require("../models/DevModel");

//Register Developers
const register = async (req, res) => {
  console.log(req.body);
  const saveDev = new DevModel(req.body);
  const unameExists = await DevModel.findOne({ email: saveDev.email });

  if (unameExists) {
    return res
      .status(201)
      .json({ message: "Email Already registered. Try with a new one" });
  }
  saveDev.save().then((data) => res.send(data));
};

//Get All Developers
const getAll = async (req, res) => {
  const data = await DevModel.find({});
  if (!data)
    return res.status(200).json({ message: "No Developers To display" });

  res.status(200).json(data);
};

module.exports = { register, getAll };
