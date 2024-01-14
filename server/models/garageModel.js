const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const garageSchema = new Schema({
  ownerId: {
    type: String,
    required: true,
    unique: true,
  },
  repairCenterName: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  ownerNIC: {
    type: String,
    required: true,
  },
  numOfWorkers: {
    type: Number,
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
});

module.exports = mongoose.model("Garage", garageSchema);
