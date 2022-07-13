const encryption = require("../models/Encryption");
const encryption_Model = require("../models/Encryption");

const getEncryption = async (req, res) => {
  console.log(req.query.userId);
  encryption_Model.find({ userId: req.query.userId }).then((membership) =>
    res.json(membership)
  );
};

const addEncryption = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const {  email,
      domain,
      ip,
      logo,
      encryption, } = req.body;
    const newTest = new encryption_Model({
        email,
      domain,
      ip,
      logo,
      encryption
    });
    newTest
      .save()
      .then((data) => {
        res.status(200).json("Added");
      })
      .catch((err) => console.log(err));

    }

    const deleteEncryption = async (req, res) => {
      let membershipID = req.params.id;
      await encryption_Model.deleteOne({ _id: membershipID }, (err, data) => {
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
  getEncryption,
  addEncryption,
  deleteEncryption
};