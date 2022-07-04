const mongoose = require('mongoose');
const { ST } = require('next/dist/shared/lib/utils');
const Schema = mongoose.Schema;

const testSchema = new Schema({
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
    type: Array
  },
  patching : {
    type: Array,
  },
  issue_count: {
    type: Array
  }

});

module.exports = mongoose.model('test', testSchema);