const membership = require("../models/Membership");
const Membership_Model = require("../models/Membership");

const addMembership = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const { title, description, curracny, price } = req.body;
  const newMembership = new Membership_Model({
    title,
    description,
    curracny,
    price,
  });
  newMembership
    .save()
    .then((data) => {
      res.status(200).json("Added");
    })
    .catch((err) => console.log(err));
};

const getMembership = async (req, res) => {
  console.log(req.query.userId);
  Membership_Model.find({ userId: req.query.userId }).then((membership) =>
    res.json(membership)
  );
};

const getspeceficMembership = async (req, res) => {
  let membershipID = req.params.id;
  await Membership_Model.findById({ _id: membershipID }, (err, data) => {
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

const deleteMembership = async (req, res) => {
  let membershipID = req.params.id;
  await Membership_Model.deleteOne({ _id: membershipID }, (err, data) => {
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

const updateMembership = async (req, res) => {
  try {
    const { title, description, curracny, price } = req.body;

    await Membership_Model.findOneAndUpdate(
      { _id: req.params.id },
      {
        title,
        description,
        curracny,
        price,
      }
    );

    res.json({ msg: "Update Success!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  addMembership,
  deleteMembership,
  getMembership,
  updateMembership,
  getspeceficMembership,
};
