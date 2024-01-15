const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  licencePlateNumber: {
    type: String,
    required: true,
    unique: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  fault: {
    type: [String],
    required: true,
  },
  nic: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
