const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  oname: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: [String],
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  repairCenterName: {
    type: String,
    required: true,
  },
  numOfWorkers: {
    type: Number,
    required: true,
  },
  openingHours: {
    type: String,
    required: true,
  },
  closingHours: {
    type: String,
    required: true,
  },
  statuS: {
    type: Number,
    required: true,
  },
  garageId: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("Owner", ownerSchema);
