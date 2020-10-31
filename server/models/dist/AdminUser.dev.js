"use strict";

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    select: false,
    set: function set(val) {
      return require('bcrypt').hashSync(val, 10);
    }
  }
});
module.exports = mongoose.model('AdminUser', schema);