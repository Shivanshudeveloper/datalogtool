const mongoose = require('mongoose');
const { ST } = require('next/dist/shared/lib/utils');
const Schema = mongoose.Schema;

const domainSchema = new Schema({
    category:{
        type:String
    },
  host: {
    type: String
  },
  ip: {
    type: String,
  },
  port: {
    type: String,
  },
  cve: {
    type: Array
  }

});

module.exports = mongoose.model('domain', domainSchema);