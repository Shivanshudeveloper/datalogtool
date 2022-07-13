const newassets = require("../models/NewAssets");
const newassets_Model = require("../models/NewAssets");

const getNewassets = async (req, res) => {
  console.log(req.query.userId);
  newassets_Model.find({ userId: req.query.userId }).then((membership) =>
    res.json(membership)
  );
};

const addNewassets = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const {  email,
      domain,
      ip,
      logo,
      assets, } = req.body;
    const newTest = new newassets_Model({
        email,
      domain,
      ip,
      logo,
      assets
    });
    newTest
      .save()
      .then((data) => {
        res.status(200).json("Added");
      })
      .catch((err) => console.log(err));

    }

    const deleteNewassets = async (req, res) => {
      let membershipID = req.params.id;
      await newassets_Model.deleteOne({ _id: membershipID }, (err, data) => {
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
  getNewassets,
  addNewassets,
  deleteNewassets
};