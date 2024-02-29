const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  requestId: {
    type: String,
    require: true,
    unique: true,
  },
  ownerName:{
    type: String,
  },
  vehicleType:{
    type: String,
  },
  mobileNo:{
    type: String,
    require: true,
  },
  longitude:{
    type: String,
  },
  lattitude:{
    type: String,
  },
  requestStatus: {
    type: String,
    require: true,
  },
  requestDate: {
    type: Date,
    require: true,
  },
});

module.exports = mongoose.model("Request", requestSchema);
