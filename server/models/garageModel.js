const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const garageSchema = new Schema({
  garageId: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Garage", garageSchema);
