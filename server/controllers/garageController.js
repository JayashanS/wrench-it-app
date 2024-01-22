const Garage = require("../models/garageModel");

const createGarage = async (req, res) => {
  const {
    userId,
    garageId,
    oname,
    nic,
    phoneNumber,
    street,
    city,
    state,
    postalCode,
    repairCenterName,
    numOfWorkers,
    openingHours,
    closingHours,
    allDayService,
    statuS,
  } = req.body;

  try {
    const garage = await Garage.create({
      userId,
      garageId,
      oname,
      nic,
      phoneNumber,
      street,
      city,
      state,
      postalCode,
      repairCenterName,
      numOfWorkers,
      openingHours,
      closingHours,
      allDayService,
      statuS,
    });

    res.status(201).json(garage);
  } catch (error) {
    console.error("Error creating Garage document", error);
    res.status(500).json({ error: "Could not create Garage document" });
  }
};

const updateGarageServicesAndCharges = async (req, res) => {
  const garageId = req.params.garageId;
  const { services, categories, minCharge, maxCharge } = req.body;

  try {
    const updatedGarage = await Garage.findOneAndUpdate(
      { garageId: garageId },
      {
        $set: {
          services,
          categories,
          minCharge,
          maxCharge,
        },
      },
      { new: true }
    );

    if (!updatedGarage) {
      return res
        .status(404)
        .json({ message: "Garage not found", garageId: garageId });
    }

    res.status(200).json(updatedGarage);
  } catch (error) {
    console.error("Error updating services and charges for Garage", error);
    res.status(500).json({
      error: "Could not update services and charges for Garage",
    });
  }
};

const updateGarageLocation = async (req, res) => {
  const garageId = req.params.garageId;
  const { longitudes, latitudes } = req.body;

  try {
    const updatedGarage = await Garage.findOneAndUpdate(
      { garageId: garageId },
      {
        $set: {
          longitudes,
          latitudes,
        },
      },
      { new: true }
    );

    if (!updatedGarage) {
      return res
        .status(404)
        .json({ message: "Garage not found", garageId: garageId });
    }

    res.status(200).json(updatedGarage);
  } catch (error) {
    console.error("Error updating location for Garage", error);
    res.status(500).json({ error: "Could not update location for Garage" });
  }
};

module.exports = {
  createGarage,
  updateGarageServicesAndCharges,
  updateGarageLocation,
};
