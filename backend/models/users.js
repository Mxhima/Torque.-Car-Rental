const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  userID: {
    type: Number,
    require: true,
    unique: true,
  },
  userFullName: {
    type: String,
    require: true,
  },
  userEmail: {
    type: String,
    require: true,
  },
  userPassword: {
    type: password,
    require: true,
  }
});

const user = mongoose.model("users", UserSchema);
module.exports = user;
