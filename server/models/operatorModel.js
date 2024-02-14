const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const operatorSchema = new Schema({
  garageId: {
    type: String,
    required: true,
  },
  opId: {
    type: String,
    required: true,
  },
  pw: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "Operator",
  },
});

module.exports = mongoose.model("Operator", operatorSchema);
