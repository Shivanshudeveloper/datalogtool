const mongoose = require('mongoose');
const { ST } = require('next/dist/shared/lib/utils');
const Schema = mongoose.Schema;

const assetSchema = new Schema({
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
  misconfiguration: {
    type: Array,
  }

});

module.exports = mongoose.model('asset', assetSchema);