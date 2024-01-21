const Repair = require("../models/repairModel");

//create Repair

const createRepair = async (req, res) => {
  const { repairId, licensePlateNo, model, fault, NIC, phoneNo, date, status } =
    req.body;

  try {
    const repair = await Repair.create({
      repairId,
      licensePlateNo,
      model,
      fault,
      NIC,
      phoneNo,
      date,
      status,
    });
    res.status(201).json(repair);
  } catch (error) {
    res.status(500).json({ error: "could not create repair" });
  }
};

//Get Repair
const getAllRepair = async (req, res) => {
  try {
    // Fetch all repair records from the database
    const repair = await Repair.find();
    res.status(200).json(repair);
  } catch (error) {
    res.status(500).json({ error: "could not retrieve repair" });
  }
};

// Delete Repair

const deleteRepair = async (req, res) => {
  console.log("Request parameters:", req.params.id);
  try {
    const repairId = req.params.id; // Correctly retrieve the ID from req.params
    console.log("Received repairId:", repairId); // Log received ID for debugging

    const deletedRepair = await Repair.findByIdAndDelete(repairId);

    if (!deletedRepair) {
      return res
        .status(404)
        .json({ message: "Repair not found", deletedRepair: repairId });
    }

    return res.status(200).json({ message: "Repair deleted successfully" });
  } catch (error) {
    console.error("Error deleting repair:", error);
    return res.status(500).json({ error: "Could not delete repair" });
  }
};

module.exports = { createRepair, deleteRepair, getAllRepair };
