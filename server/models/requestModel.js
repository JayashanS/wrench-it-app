const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  requestId: {
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
  longitude: {
    type: String,
  },
  latitude: {
    type: String,
  },
  status: {
    type: String,
  },
  repair: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Request", requestSchema);
