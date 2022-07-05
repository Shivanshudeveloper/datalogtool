const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name:{
    type:String
  },
  user: { 
    type: String 
},
  target: {
    type: Array,
  },
  score: {
    type: String,
    required: false,
  },
  logo: {
    type: String
  }
});
const vendorData = mongoose.model("vendor", formSchema);
module.exports = vendorData;
