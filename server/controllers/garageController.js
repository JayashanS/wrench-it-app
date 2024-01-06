const Garage = require("../models/garageModel");

const createGarage = async (req, res) => {
  const {
    garageId,
    address,
    repairCenterName,
    ownerName,
    openingHours,
    closingHours,
    serviceOffered,
    gOwnerNIC,
    location,
    numOfWorkers,
    station,
  } = req.body;

  try {
    const garage = await Garage.create({
      garageId,
      address,
      repairCenterName,
      ownerName,
      openingHours,
      closingHours,
      serviceOffered,
      gOwnerNIC,
      location,
      numOfWorkers,
      station,
    });
    res.status(201).json(garage);
  } catch (error) {
    res.status(500).json({ error: "Could not create garage" });
  }
};

const getAllGarages = async (req, res) => {
  try {
    // Fetch all garage records from the database
    const garages = await Garage.find();
    res.status(200).json(garages);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve garage details" });
  }
};

const deleteGarage = async (req, res) => {
  try {
    const garageId = req.params.id; // Correctly retrieve the ID from req.params
    console.log("Received garageId:", garageId); // Log received ID for debugging

    const deletedGarage = await Garage.findByIdAndDelete(garageId);

    if (!deletedGarage) {
      return res
        .status(404)
        .json({ message: "Garage not found", deletedGarageId: garageId });
    }

    return res.status(200).json({ message: "Garage deleted successfully" });
  } catch (error) {
    console.error("Error deleting garage:", error);
    return res.status(500).json({ error: "Could not delete garage" });
  }
};

module.exports = { createGarage, getAllGarages, deleteGarage };
