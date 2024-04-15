const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({

  garageId: {
    type: String,
    required: true,
  },
  startingDate: {
    type: Date,
    required: true,
  },
  startingTime: {
    type:String,
    required: true,
  },
  endDate: {
    type:Date,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
    
  },
  companyName: {
    type: String,
    required: true,
    
  },
  logoUrl: {
    type: String,
    
    
  },
  photoUrl: {
    type: String,
    
    
  },

});

module.exports = mongoose.model("Offer", offerSchema);
