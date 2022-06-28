const Guest_Model = require("../models/Guest");
const Membership_Model = require("../models/Membership");

const addGuest = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const { userId, name, email, phoneNumber, title, price } = req.body;
  console.log(req.body);
  const newGuest = new Guest_Model({
    userId,
    name,
    email,
    phoneNumber,
  });
  var guestId;
  newGuest
    .save()
    .then((data) => {
      console.log(data);
      guestId = data._id;
      const newMembership = new Membership_Model({
        userId,
        guest: guestId,
        title,
        price,
      });
      newMembership.save().then((data2) => {
        console.log(data2);
        res.status(200).json("Guest and MemberShip Added");
      });
    })
    .catch((err) => console.log(err));
};

const getGuests = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const { userId } = req.body;
  console.log(userId);
  try {
    const guests = await Guest_Model.find({ userId: userId });

    Guest_Model.aggregate([
      {
        $lookup: {
          from: "memberships",
          localField: "_id",
          foreignField: "guest",
          as: "guestWithMembership",
        },
      },
      {
        $unwind: "$guestWithMembership",
      },
    ]).then((result) => {
      console.log(result);
      const finalResult = result.filter((item) => item.userId === userId);
      res.status(200).send(finalResult);
    });

    // console.log(guests);

    // res.status(200).send(guests);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addGuest,
  getGuests,
};
