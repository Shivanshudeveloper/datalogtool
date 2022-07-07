const misconfig = require("../models/Misconfiguration");
const misconfig_Model = require("../models/Misconfiguration");

const getMisconfig = async (req, res) => {
  console.log(req.query.userId);
  misconfig_Model.find({ userId: req.query.userId }).then((membership) =>
    res.json(membership)
  );
};

const addMisconfig = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const {  email,
      domain,
      ip,
      logo,
      misconfiguration, } = req.body;
    const newTest = new misconfig_Model({
        email,
      domain,
      ip,
      logo,
      misconfiguration
    });
    newTest
      .save()
      .then((data) => {
        res.status(200).json("Added");
      })
      .catch((err) => console.log(err));

    }

    const deleteMisconfig = async (req, res) => {
      let membershipID = req.params.id;
      await misconfig_Model.deleteOne({ _id: membershipID }, (err, data) => {
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
  getMisconfig,
  addMisconfig,
  deleteMisconfig
};
