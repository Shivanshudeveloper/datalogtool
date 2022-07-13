const mongoose = require('mongoose');
const { ST } = require('next/dist/shared/lib/utils');
const Schema = mongoose.Schema;

const newassetsSchema = new Schema({
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
  assets: {
    type: Array,
  }

});

module.exports = mongoose.model('newassets', newassetsSchema);