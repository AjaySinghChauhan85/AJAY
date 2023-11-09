const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  mobile: Number,
});

const UserModel = mongoose.model("user", userSchema);

module.exports =  UserModel 
