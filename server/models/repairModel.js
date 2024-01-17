const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const repairSchema = new Schema({
  repairId: {
    type: String,
    required: true,
    unique: true,
  },
  licensePlateNo: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },

  fault: {
    type: String,
    required: true,
  },

  NIC: {
    type: String,
    required: true,
  },

  phoneNo: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  status: {
    type: String,
  },
});
module.exports = mongoose.model("Repair", repairSchema);
