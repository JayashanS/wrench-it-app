const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partSchema = new Schema({
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
  cpw: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Part", partSchema);
