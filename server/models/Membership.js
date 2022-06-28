var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const membershipsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  guest: { type: Schema.Types.ObjectId, ref: "Guest", required: true },
  userId: { type: String, required: true },

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  currancy: {
    type: Object,
  },
  price: {
    type: String,
    required: true,
  },
});
const membership = mongoose.model("membership", membershipsSchema);
module.exports = membership;
