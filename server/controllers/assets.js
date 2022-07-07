const assets = require("../models/Assets");
const assets_Model = require("../models/Assets");

const getAsset = async (req, res) => {
  console.log(req.query.userId);
  assets_Model.find({ userId: req.query.userId }).then((membership) =>
    res.json(membership)
  );
};

const addAsset = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const {  email,
      domain,
      ip,
      logo,
      assets,
      issue_count } = req.body;
    const newAsset = new assets_Model({
        email,
        domain,
        ip,
        logo,
        assets,
        issue_count
    });
    newAsset
      .save()
      .then((data) => {
        res.status(200).json("Added");
      })
      .catch((err) => console.log(err));

    }

    const deleteAsset = async (req, res) => {
      let membershipID = req.params.id;
      await assets_Model.deleteOne({ _id: membershipID }, (err, data) => {
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
  getAsset,
  addAsset,
  deleteAsset
};
