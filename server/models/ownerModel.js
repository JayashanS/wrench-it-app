const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  nic: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: [String],
    required: true,
  },
  licencePlateNumbers: {
    type: [String],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Owner", ownerSchema);
