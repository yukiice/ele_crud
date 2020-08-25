"use strict";

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    type: String
  },
  icon: {
    type: String
  }
});
module.exports = mongoose.model('Item', schema);