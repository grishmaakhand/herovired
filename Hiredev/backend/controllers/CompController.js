const CompanyModel = require("../models/CompanyModel");

//Register Companies
const register = async (req, res) => {
  const saveComp = new CompanyModel(req.body);
  //check if email exists
  const emailExists = await CompanyModel.findOne({ email: saveComp.email });

  if (emailExists) {
    return res
      .status(201)
      .json({ message: "Email Already Exists. Try using another email" });
  }

  await saveComp.save().then((data) => {
    res.status(200).json(data);
  });
};

//Get All Companies
const getAll = async (req, res) => {
  const data = await CompanyModel.find({});
  if (!data)
    return res.status(200).json({ message: "No Companies To display" });

  res.status(200).json(data);
};

module.exports = { register, getAll };
