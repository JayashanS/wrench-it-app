const Offer = require("../models/offerModel");

// Controller function to create a new offer document
const createOffer = async (req, res) => {
  try {
    const newOffer = await Offer.create(req.body);
    res.status(201).json(newOffer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete an offer document by ID
const deleteOfferById = async (req, res) => {
  try {
    const deletedOffer = await Offer.findByIdAndDelete(req.params.id);
    if (!deletedOffer) {
      return res.status(404).json({ message: "Offer not found" });
    }
    res.status(200).json({ message: "Offer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get all offer documents
const getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


  
  const getOffersByGarageId = async (req, res) => {
    try {
      const garageId = req.params.garageId;
      const offers = await Offer.find({ garageId }); // Assuming Offer is your Mongoose model
  
      if (!offers) {
        return res.status(404).json({ error: "No offers found for this garage ID" });
      }
  
      res.status(200).json({ data: offers });
    } catch (error) {
      console.error("Error fetching offers:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  
module.exports = {
  createOffer,
  deleteOfferById,
  getAllOffers,
  getOffersByGarageId,
};
