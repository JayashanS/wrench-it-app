const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partSchema = new Schema({

  partId: {
    type: String,
    required: true,
  },
  partName: {
    type: String,
    required: true,
  },
  unitPrice: {
    type:Number,
    required: true,
  },
  quantity: {
    type:Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
    
  },
});

module.exports = mongoose.model("Part", partSchema);
