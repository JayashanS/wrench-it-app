const Repair = require("../models/repairModel");

//create Repair
const createRepair = async (req, res) => {
  const {
    repairId,
    licensePlateNo,
    model,
    fault,
    userEmail,
    phoneNo,
    date,
    status,
  } = req.body;

  // Extract owner email from request parameters
  const { email } = req.params;

  try {
    const repair = await Repair.create({
      repairId,
      licensePlateNo,
      model,
      fault,
      userEmail,
      garageId: email, // Use email as garageId
      phoneNo,
      date,
      status,
    });
    res.status(201).json(repair);
  } catch (error) {
    console.error("Error creating repair:", error);
    res.status(500).json({ error: "Could not create repair" });
  }
};

const getAllRepair = async (req, res) => {
  try {
    const { email } = req.params;

    // Find repairs with the owner's email in garageId
    const filteredRepairs = await Repair.find({ garageId: email });

    // Remove email part from repairId in each document
    const modifiedRepairs = filteredRepairs.map((repair) => {
      const originalRepairId = repair.repairId.split(".")[0];
      return { ...repair.toObject(), repairId: originalRepairId };
    });

    res.status(200).json(modifiedRepairs);
  } catch (error) {
    console.error("Error fetching repair records:", error);
    res.status(500).json({ error: "Could not retrieve repair records" });
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
