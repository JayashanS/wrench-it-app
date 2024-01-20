const Part = require("../models/partModel");

const createPart = async (req, res) => {
  const { partId,partName, unitPrice, quantity} =req.body;

const totalPrice=unitPrice*quantity;

  try {
    const part = await Part.create({
      partId,
      partName,
      unitPrice,
      quantity,
      totalPrice,
    });
    res.status(201).json(part);
  } catch (error) {
    res.status(500).json({ error: "Could not create Part" });
  }
};

const deletePart = async (req, res) => {
  try {
    const partId = req.params.id;
    const deletedPart = await Part.findByIdAndDelete(partId);

    if (!deletedPart) {
      return res
        .status(404)
        .json({ message: "Part not Found", deletedPartId: partId });
    }

    return res.status(200).json({ message: "Part successfully deleted" });
  } catch (error) {
    console.error("Error deleting Part", Part);
    return res.status(500).json({ error: "Could not delete Part" });
  }
};

const getAllParts = async (req, res) => {
  try {
    const allParts = await Part.find();
    res.status(200).json(allParts);
  } catch (error) {
    console.error("Error fetching all parts", error);
    res.status(500).json({ error: "Could not fetch all parts" });
  }
};



module.exports = {
  createPart,
  deletePart,
  getAllParts,
  
};
