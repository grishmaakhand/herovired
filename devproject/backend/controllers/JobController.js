const JobModel = require("../models/JobModel");

const register = async (req, res) => {
  const saveJob = new JobModel(req.body);
  await saveJob.save().then((data) => res.status(200).json(data));
};

const getAll = async (req, res) => {
  const data = await JobModel.find({});
  if (!data) return res.status(200).json({ message: "Do Jobs To display" });

  res.status(200).json(data);
};

module.exports = { register, getAll };
