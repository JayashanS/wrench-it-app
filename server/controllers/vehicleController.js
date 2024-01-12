const Vehicle = require("../models/vehicleModel");

// Creating Vehicle
const createVehicle = async (req, res) => {
  const {
    licencePlateNumber,
    manufacturer,
    model,
    category,
    year,
    fault,
    nic,
  } = req.body;

  try {
    const vehicle = await Vehicle.create({
      licencePlateNumber,
      manufacturer,
      model,
      category,
      year,
      fault,
      nic,
    });
    res.status(201).json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Requested information is incorrect!" });
  }
};

const deleteVehiclebyLIC = async (req, res) => {
  try {
    const LIC = req.params.id;
    const deletedVehicle = await Vehicle.findOneAndDelete({
      licencePlateNumber: LIC,
    });

    if (!deletedVehicle) {
      return res
        .status(404)
        .json({ message: "Vehicle not Found", licensePlateNumber: LIC });
    }

    return res.status(200).json({ message: "Vehicle successfully deleted" });
  } catch (error) {
    console.error("Error deleting Vehicle", error);
    return res.status(500).json({ error: "Could not delete Vehicle" });
  }
};

module.exports = { createVehicle, deleteVehiclebyLIC };
