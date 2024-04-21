const Offer = require("../models/offerModel");
const fs = require("fs");
const path = require("path");

const createOffer = async (req, res) => {
  try {
    // Check if both photo and logo are provided in the request
    if (!req.files || !req.files.photo || !req.files.logo) {
      return res
        .status(400)
        .json({ message: "Both photo and logo are required" });
    }

    const {
      garageId,
      startingDate,
      startingTime,
      endDate,
      endTime,
      companyName,
    } = req.body;
    const photo = req.files.photo;
    const logo = req.files.logo;

    const uploadDir = path.join(__dirname, "../assets/offer");
    const photoFileName = Date.now() + "_" + photo.name;
    const logoFileName = Date.now() + "_" + logo.name;

    // Move the uploaded photo and logo to the destination folder
    await photo.mv(path.join(uploadDir, photoFileName));
    await logo.mv(path.join(uploadDir, logoFileName));

    // Construct photoUrl and logoUrl
    const photoUrl = path.join("/assets/offer", photoFileName);
    const logoUrl = path.join("/assets/offer", logoFileName);

    // Save the offer details to the database
    const newOffer = new Offer({
      garageId,
      startingDate,
      startingTime,
      endDate,
      endTime,
      companyName,
      photoUrl,
      logoUrl,
    });

    const savedOffer = await newOffer.save();
    res
      .status(201)
      .json({ message: "Offer created successfully", offer: savedOffer });
  } catch (error) {
    console.error("Error creating offer:", error);
    res.status(500).json({ message: "Error creating offer" });
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
      return res
        .status(404)
        .json({ error: "No offers found for this garage ID" });
    }

    res.status(200).json({ data: offers });
  } catch (error) {
    console.error("Error fetching offers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createOffer,
  deleteOfferById,
  getAllOffers,
  getOffersByGarageId,
};
