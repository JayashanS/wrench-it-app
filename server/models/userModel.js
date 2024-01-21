const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  bday: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pw: {
    type: String,
    required: true,
  },
});

// static login method
userSchema.statics.login = async function (email, pw) {
  if (!email || !pw) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(pw, user.pw);
  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};

// static signup method
userSchema.statics.signup = async function (
  fname,
  lname,
  bday,
  email,
  pw,
  cpw
) {
  if (!email || !pw) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(pw)) {
    throw Error("Password not strong enough");
  }

  if (pw !== cpw) {
    throw Error("Passwords do not match");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pw, salt);

  const user = await this.create({
    fname,
    lname,
    bday,
    email,
    pw: hash,
  });

  return user;
};

module.exports = mongoose.model("User", userSchema);
