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

  userEmail: {
    type: String,
    required: true,
  },
  garageId: {
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
    required: true,
    default: "In Progress",
  },
});
module.exports = mongoose.model("Repair", repairSchema);
