const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
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

  date: {
    type: Date,
    required: true,
  },

  partID: {
    type: String,
    required: true,
  },

  partName: {
    type: String,
    required: true,
  },
 quantity: {
    type: Number,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  totalPartPrice: {
    type: Number,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  serviceCost: {
    type: String,
    required: true,
  },
  totalCost: {
    type: String,
    required: true,
  },





});
module.exports = mongoose.model("Bill", billSchema);
