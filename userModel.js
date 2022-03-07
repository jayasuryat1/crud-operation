const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "User must have a First name"],
    minlength: 3,
  },
  lastname: {
    type: String,
    required: [true, "User must have a Last name"],
    minlength: 3,
  },
  mobile: {
    type: Number,
    required: [true, "User must have a Mobile Number"],
    minlength: 10,
  },
  email: {
    type: String,
    required: [true, "User must have a Email Address"],
    unique: true,
  },
});

module.exports = USER = mongoose.model("USER", userSchema);
