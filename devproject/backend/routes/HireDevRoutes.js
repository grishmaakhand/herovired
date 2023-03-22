const router = require("express").Router();
const DevController = require("../controllers/DevController");
const CompController = require("../controllers/CompController");
const JobController = require("../controllers/JobController");

//Post
router.post("/register-dev", DevController.register);
router.post("/register-comp", CompController.register);
router.post("/add-job", JobController.register);

//Get
router.get("/jobs", JobController.getAll);
router.get("/developers", DevController.getAll);
router.get("/companies", CompController.getAll);

module.exports = router;
