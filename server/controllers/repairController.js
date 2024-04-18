const Repair = require("../models/repairModel");
const Counter = require("../models/counterModel");

const createRepair = async (req, res) => {
  const { licensePlateNo, model, fault, userEmail, phoneNo, date, status } =
    req.body;
  const { email } = req.params;

  try {
    let counter = await Counter.findById(`repairId_${email}`);
    // If counter doesn't exist, create it with initial value R001
    if (!counter) {
      counter = await Counter.create({
        _id: `repairId_${email}`,
        sequence_value: 1,
      });
    }
    // Convert sequence_value to the desired format
    const formattedRepairId = `R${counter.sequence_value
      .toString()
      .padStart(3, "0")}`;
    // Increment the counter specific to the garageId
    counter = await Counter.findByIdAndUpdate(
      { _id: `repairId_${email}` },
      { $inc: { sequence_value: 1 } },
      { new: true }
    );

    // Create the repair with the formatted repairId
    const repair = await Repair.create({
      repairId: formattedRepairId,
      licensePlateNo,
      model,
      fault,
      userEmail,
      garageId: email,
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
