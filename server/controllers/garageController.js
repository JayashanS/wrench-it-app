const Garage = require("../models/garageModel");

const createGarage = async (req, res) => {
  const {
    ownerId,
    repairCenterName,
    ownerName,
    street,
    city,
    state,
    postalCode,
    ownerNIC,
    numOfWorkers,
  } = req.body;

  try {
    const garage = await Garage.create({
      ownerId,
      repairCenterName,
      ownerName,
      street,
      city,
      state,
      postalCode,
      ownerNIC,
      numOfWorkers,
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

const getGarageByOwnerId = async (req, res) => {
  try {
    const Id = req.params.ownerID;
    const garage = await Garage.findOne({ ownerId: Id });

    if (!garage) {
      return res
        .status(404)
        .json({ message: "Garage not found for ownerId", ownerId });
    }

    res.status(200).json(garage);
  } catch (error) {
    console.error("Error retrieving garage:", error);
    res.status(500).json({ error: "Could not retrieve garage" });
  }
};

const updateGarage = async (req, res) => {
  try {
    const {
      repairCenterName,
      ownerName,
      ownerNIC,
      numOfWorkers,
      street,
      city,
      state,
      postalCode,
    } = req.body;
    const updatedGarage = await Garage.findOneAndUpdate(
      { ownerId: req.params.ownerId }, // Assuming ownerId is the identifier
      {
        repairCenterName,
        ownerName,
        ownerNIC: ownerNIC,
        numOfWorkers,
        street,
        city,
        state,
        postalCode,
      },
      { new: true }
    );

    if (!updatedGarage) {
      return res.status(404).json({
        message: "Garage not found for ownerId",
        ownerId: req.params.ownerId,
      });
    }

    res.status(200).json(updatedGarage);
  } catch (error) {
    console.error("Error updating garage:", error);
    res.status(500).json({ error: "Could not update garage" });
  }
};

module.exports = {
  createGarage,
  getAllGarages,
  deleteGarage,
  getGarageByOwnerId,
  updateGarage,
};
