const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    userId: { 
        type: String 
    },
  name:{
    type:String
  },
  target: {
    type: Array,
  },
  score: {
    type: String,
    required: false,
  }
});
const vendorData = mongoose.model("vendor", formSchema);
module.exports = vendorData;
