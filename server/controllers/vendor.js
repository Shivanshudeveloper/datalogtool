const vendor = require("../models/Vendor");
const Vendor_Model = require("../models/Vendor");

const addVendor = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const { name, target, score } = req.body;
  const newMembership = new Vendor_Model({
    name,
    target,
    score,
  });
  newMembership
    .save()
    .then((data) => {
      res.status(200).json("Added");
    })
    .catch((err) => console.log(err));
};

const getVendor = async (req, res) => {
  console.log(req.query.userId);
  Vendor_Model.find({ userId: req.query.userId }).then((membership) =>
    res.json(membership)
  );
};

const getspeceficVendor = async (req, res) => {
  let membershipID = req.params.id;
  await Vendor_Model.findById({ _id: membershipID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please tr y again later.",
      });
    } else {
      res.status(200).json({
        message: "Found",
        data: data,
      });
    }
  });
};

const deleteVendor = async (req, res) => {
  let membershipID = req.params.id;
  await Vendor_Model.deleteOne({ _id: membershipID }, (err, data) => {
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

const updateVendor = async (req, res) => {
  try {
    const { name, target, score } = req.body;

    await Membership_Model.findOneAndUpdate(
      { _id: req.params.id },
      {
        name,
        target,
        score,
      }
    );

    res.json({ msg: "Update Success!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  addVendor,
  getVendor,
  getspeceficVendor,
  deleteVendor,
  updateVendor,
};
