const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  reservationtId: {
    type: String,
    require: true,
  },
  vehicleType: {
    type: String,
    require: true,
  },
  reservationStatus: {
    type: String,
    require: true,
  },
  reservationtDate: {
    type: Date,
    require: true,
  },
  reservationtTime: {
    type: String,
    require: true,
  },
  customerName: {
    type: String,
    require: true,
  },
  contactNo: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
