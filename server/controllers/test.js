const test = require("../models/Test");
const test_Model = require("../models/Test");

const getTest = async (req, res) => {
  console.log(req.query.userId);
  test_Model.find({ userId: req.query.userId }).then((membership) =>
    res.json(membership)
  );
};

const addTest = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const {  email,
      domain,
      ip,
      logo,
      assets,
      dns,
      human,
      misconfiguration,
      encryption,
      patching,
      breaches,
      brand,
      issue_count } = req.body;
    const newTest = new test_Model({
        email,
        domain,
        ip,
        logo,
        assets,
        dns,
        human,
        misconfiguration,
        encryption,
        patching,
        breaches,
        brand,
        issue_count
    });
    newTest
      .save()
      .then((data) => {
        res.status(200).json("Added");
      })
      .catch((err) => console.log(err));

    }
module.exports = {
  getTest,
  addTest
};
