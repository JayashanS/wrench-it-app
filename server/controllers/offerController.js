const Offer = require("../models/offerModel");
const fs = require("fs");
const path = require("path");

const createOffer = async (req, res) => {
  try {
    // Check if a file is provided in the request
    if (!req.files || !req.files.photo) {
      return res.status(400).json({ message: "Photo is required" });
    }

    // Retrieve other offer details from the request body
    const {
      garageId,
      startingDate,
      startingTime,
      endDate,
      endTime,
      companyName,
    } = req.body;

    // Get the uploaded photo
    const photo = req.files.photo;

    // Define the destination folder
    const uploadDir = path.join(__dirname, "../assets/offer");

    // Ensure the directory exists, create if not
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Generate a unique file name to avoid conflicts
    const photoFileName = Date.now() + "_" + photo.name;

    // Move the uploaded photo to the destination folder
    photo.mv(path.join(uploadDir, photoFileName), async (err) => {
      if (err) {
        console.error("Error uploading photo:", err);
        return res.status(500).json({ message: "Error uploading photo" });
      }

      // Check if a logo is provided in the request
      let logoUrl = "";
      if (req.files && req.files.logo) {
        const logo = req.files.logo;
        const logoFileName = Date.now() + "_" + logo.name;
        logo.mv(path.join(uploadDir, logoFileName), (err) => {
          if (err) {
            console.error("Error uploading logo:", err);
            return res.status(500).json({ message: "Error uploading logo" });
          }
          logoUrl = path.join("/assets/offer/", logoFileName);
        });
      }

      // Create a new offer object
      const newOffer = await Offer.create({
        garageId,
        startingDate,
        startingTime,
        endDate,
        endTime,
        companyName,
        logoUrl,
        photoUrl: path.join("/assets/offer/", photoFileName), // Store the file path to the photo
      });

      res.status(201).json(newOffer);
    });
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
