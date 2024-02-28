const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const garageSchema = new Schema({
  garageId: {
    type: String,
    required: true,
    unique: true,
  },
  oname: {
    type: String,
  },
  nic: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  repairCenterName: {
    type: String,
  },
  numOfWorkers: {
    type: Number,
  },
  openingHours: {
    type: String,
  },
  closingHours: {
    type: String,
  },
  allDayService: {
    type: Boolean,
  },
  statuS: {
    type: Number,
  },
  services: {
    SuspensionRepairs: { type: Boolean, default: false },
    TransmissionIssues: { type: Boolean, default: false },
    Electrical: { type: Boolean, default: false },
    Electronic: { type: Boolean, default: false },
    BodyRepairsAndPainting: { type: Boolean, default: false },
    BreakdownRepairAndServices: { type: Boolean, default: false },
    Engine: { type: Boolean, default: false },
    Scanning: { type: Boolean, default: false },
    HVSystem: { type: Boolean, default: false },
    BrakeServicesAndMaintenance: { type: Boolean, default: false },
  },
  categories: {
    MotorcyclesAndThreeWheelers: { type: Boolean, default: false },
    LightWeight: { type: Boolean, default: false },
    HeavyWeight: { type: Boolean, default: false },
  },
  location: {
    type: { type: String, enum: ["Point"] },
    coordinates: { type: [Number] },
  },
  minCharge: {
    type: Number,
  },
  maxCharge: {
    type: Number,
  },
  description: {
    type: String,
  },
});

// Add a 2dsphere index on the 'location' field
garageSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Garage", garageSchema);
