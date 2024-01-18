const Owner = require("../models/ownerModel");

// Creating Owner
const createOwner = async (req, res) => {
  const {
    nic,
    oname,
    phoneNumber,
    street,
    city,
    state,
    postalCode,
    repairCenterName,
    numOfWorkers,
    openingHours,
    closingHours,
    statuS,
    garageId,
  } = req.body;

  try {
    const owner = await Owner.create({
      nic,
      oname,
      phoneNumber,
      street,
      city,
      state,
      postalCode,
      repairCenterName,
      numOfWorkers,
      openingHours,
      closingHours,
      statuS,
      garageId,
    });
    res.status(201).json(owner);
  } catch (error) {
    console.error("Error creating Owner", error);
    res.status(500).json({ error: "Could not create Owner" });
  }
};

// Deleting Owner
const deleteOwner = async (req, res) => {
  try {
    const ownerId = req.params.id;
    const deletedOwner = await Owner.findByIdAndDelete(ownerId);

    if (!deletedOwner) {
      return res
        .status(404)
        .json({ message: "Owner not Found", deletedOwnerId: ownerId });
    }

    return res.status(200).json({ message: "Owner successfully deleted" });
  } catch (error) {
    console.error("Error deleting Owner", error);
    return res.status(500).json({ error: "Could not delete Owner" });
  }
};

// Update Owner Data by NIC
const updateOwnerByNIC = async (req, res) => {
  const {
    nic,
    oname,
    phoneNumber,
    street,
    city,
    state,
    postalCode,
    repairCenterName,
    numOfWorkers,
    openingHours,
    closingHours,
    statuS,
    garageId,
  } = req.body;

  try {
    const updatedOwner = await Owner.findOneAndUpdate(
      { nic: req.params.nic },
      {
        nic,
        oname,
        phoneNumber,
        street,
        city,
        state,
        postalCode,
        repairCenterName,
        numOfWorkers,
        openingHours,
        closingHours,
        statuS,
        garageId,
      },
      {
        new: true,
      }
    );

    if (!updatedOwner) {
      return res.status(404).json({ message: "Owner not Found with NIC", nic });
    }

    return res.status(200).json(updatedOwner);
  } catch (error) {
    console.error("Error updating Owner by NIC", error);
    return res.status(500).json({ error: "Could not update Owner" });
  }
};

// Get Owner Data by NIC
const getOwnerByNIC = async (req, res) => {
  const { nic } = req.params;

  try {
    const owner = await Owner.findOne({ nic });

    if (!owner) {
      return res.status(404).json({ message: "Owner not Found with NIC", nic });
    }

    return res.status(200).json(owner);
  } catch (error) {
    console.error("Error getting Owner by NIC", error);
    return res.status(500).json({ error: "Could not get Owner" });
  }
};

module.exports = {
  createOwner,
  deleteOwner,
  updateOwnerByNIC,
  getOwnerByNIC,
};
