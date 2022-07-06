const domain = require("../models/Domain");
const Domain_Model = require("../models/Domain");

const addDomain = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const {category,host, ip, port, cve } = req.body;
    const newMembership = new Domain_Model({
        category,host, ip, port, cve 
    });
    newMembership
      .save()
      .then((data) => {
        res.status(200).json("Added");
      })
      .catch((err) => console.log(err));
  };

const getDomain = async (req, res) => {
  console.log(req.query.id);
  Domain_Model.find({ userId: req.query.id }).then((membership) =>
    res.json(membership)
  );
};

const deleteDomain = async (req, res) => {
  let membershipID = req.params.id;
  await Domain_Model.deleteOne({ _id: membershipID }, (err, data) => {
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

const updateDomain = async (req, res) => {
  try {
    const { category,
        host,
        ip,
        port,
        cve } = req.body;

    await Domain_Model.findOneAndUpdate(
      { _id: req.params.id },
      {
        category,
      host,
      ip,
      port,
      cve
      }
    );

    res.json({ msg: "Update Success!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  addDomain,
  getDomain,
  deleteDomain,
  updateDomain,
};
