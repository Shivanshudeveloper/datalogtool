const mongoose = require('mongoose');
const { ST } = require('next/dist/shared/lib/utils');
const Schema = mongoose.Schema;

const breachesSchema = new Schema({
  email: {
    type: String
  },
  domain: {
    type: String
  },
  ip: {
    type: String,
  },
  logo: {
    type: String,
  },
  dns:{
    type:Array
  },
  human:{
    type:Array
  },
  breaches: {
    type: Array,
  }

});

module.exports = mongoose.model('breaches', breachesSchema);