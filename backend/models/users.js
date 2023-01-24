const mongoose = require('mongoose');
const crypto = require("crypto");

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
    unique: true
  },
  enc_password: {
    type: String,
    require: true
  },
  salt: String,
},{timestamps: true});

UserSchema.virtual("password")
  .set(function() {

  })
  .get(function() {

  })

UserSchema.methods = {
  authenticate: function(plainPassw) {
    return this.securePassw(plainPassw) === this.enc_password
  },

  securePassw: function(plainPassw) {
    if(!plainPassw) return "";

    try {
      return crypto.createHmac("sha256", this.salt).update(plainPassw).digest('hex')
    } catch (err) {
      return ""
    }
  },
}

const user = mongoose.model("users", UserSchema);
module.exports = user;
