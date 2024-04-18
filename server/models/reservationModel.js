const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  reservationId: {
    type: String,
    require: true,
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
  status: {
    type: String,
  },
  repair: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
