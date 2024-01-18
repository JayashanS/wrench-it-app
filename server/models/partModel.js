const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partSchema = new Schema({
  garageId: {
    type: String,
    required: true,
  },
  partId: {
    type: String,
    required: true,
  },
  partName: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: String,
    required: true,
  },
  count: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Part", partSchema);
