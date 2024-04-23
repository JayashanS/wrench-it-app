const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  garageId: {
    type: String,
    required: true,
    unique: true,
  },
  feedbacks: {
    type: [String],
    default: [],
  },
  rating: {
    type: Number,
    default: 0,
  },
  rating_added: [
    {
      user: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Rating", ratingSchema);
