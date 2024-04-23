const Rating = require("../models/ratingModel");

// Controller to add a rating
const addRating = async (req, res) => {
  const { garageId, user, amount } = req.body;

  try {
    let rating = await Rating.findOne({ garageId });

    if (!rating) {
      rating = new Rating({ garageId });
    }

    // Check if the user has already added a rating
    const existingRating = rating.rating_added.find(
      (entry) => entry.user === user
    );

    if (existingRating) {
      // Update the existing rating if the user has already rated
      existingRating.amount = amount;
    } else {
      // Add a new entry for the user's rating
      rating.rating_added.push({ user, amount });
    }

    // Calculate the new overall rating based on all ratings
    const totalRatings = rating.rating_added.reduce(
      (total, entry) => total + entry.amount,
      0
    );
    rating.rating = totalRatings / rating.rating_added.length;

    await rating.save();

    res.status(201).json(rating);
  } catch (error) {
    console.error("Error adding rating:", error);
    res.status(500).json({ error: "An error occurred while adding rating" });
  }
};

const addFeedback = async (req, res) => {
  const { garageId, feedback } = req.body;

  try {
    let rating = await Rating.findOne({ garageId });

    if (!rating) {
      return res.status(404).json({ message: "Rating not found for garageId" });
    }

    rating.feedbacks.push(feedback);
    await rating.save();

    res.status(201).json(rating);
  } catch (error) {
    console.error("Error adding feedback:", error);
    res.status(500).json({ error: "An error occurred while adding feedback" });
  }
};

const getRatingByGarageId = async (req, res) => {
  const { garageId } = req.params;

  try {
    const rating = await Rating.findOne({ garageId });

    if (!rating) {
      return res.status(404).json({ message: "Rating not found for garageId" });
    }

    res.status(200).json(rating);
  } catch (error) {
    console.error("Error getting rating by garageId:", error);
    res
      .status(500)
      .json({ error: "An error occurred while getting rating by garageId" });
  }
};

// Controller to get feedbacks by garage ID
const getFeedbacksByGarageId = async (req, res) => {
  const { garageId } = req.params;

  try {
    const rating = await Rating.findOne({ garageId });

    if (!rating) {
      return res.status(404).json({ message: "Rating not found for garageId" });
    }

    const feedbacks = rating.feedbacks;
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error getting feedbacks by garageId:", error);
    res
      .status(500)
      .json({ error: "An error occurred while getting feedbacks by garageId" });
  }
};

module.exports = {
  addRating,
  addFeedback,
  getRatingByGarageId,
  getFeedbacksByGarageId,
};
