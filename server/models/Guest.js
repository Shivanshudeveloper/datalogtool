const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    // default: Date.now(),
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const Guest = mongoose.model("guest", guestSchema);

module.exports = Guest;
