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
    default: "incoming",
  },
  requestDate: {
    type: Date,
    require: true,
  },
  issue:{
    type: String,
  }
});

module.exports = mongoose.model("Request", requestSchema);
