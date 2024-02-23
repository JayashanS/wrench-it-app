const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const garageSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  garageId: {
    type: String,
    required: true,
    unique: true,
  },
  oname: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
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
  repairCenterName: {
    type: String,
    required: true,
  },
  numOfWorkers: {
    type: Number,
    required: true,
  },
  openingHours: {
    type: String,
    required: true,
  },
  closingHours: {
    type: String,
    required: true,
  },
  allDayService: {
    type: Boolean,
  },
  statuS: {
    type: Number,
    required: true,
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
});

// Add a 2dsphere index on the 'location' field
garageSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Garage", garageSchema);
