const breaches = require("../models/Breaches");
const breaches_Model = require("../models/Breaches");

const getBreaches = async (req, res) => {
  console.log(req.query.userId);
  breaches_Model.find({ userId: req.query.userId }).then((membership) =>
    res.json(membership)
  );
};

const addBreaches = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const {  email,
      domain,
      ip,
      logo,
      dns,
    human,
breaches } = req.body;
    const newTest = new breaches_Model({
        email,
      domain,
      ip,
      logo,
      dns,
      human,
      breaches
    });
    newTest
      .save()
      .then((data) => {
        res.status(200).json("Added");
      })
      .catch((err) => console.log(err));

    }

    const deleteBreaches = async (req, res) => {
      let membershipID = req.params.id;
      await breaches_Model.deleteOne({ _id: membershipID }, (err, data) => {
        if (err) {
          res.status(500).json({
            message: "Something went wrong, please try again later.",
          });
        } else {
          res.status(200).json({
            message: "Post Deleted",
            data: data,
          });
        }
      });
    };
module.exports = {
  getBreaches,
  addBreaches,
  deleteBreaches
};