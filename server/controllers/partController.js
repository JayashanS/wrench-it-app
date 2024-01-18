const Part = require("../models/partModel");

const createPart = async (req, res) => {
  const { garageId, partId, partName, unitPrice, count, description } =
    req.body;

  try {
    const part = await Part.create({
      garageId,
      partId,
      partName,
      unitPrice,
      count,
      description,
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
const getAllPartsByGarageId = async (req, res) => {
  try {
    const garageId = req.params.garageId;
    const allParts = await Part.find({ garageId: garageId });
    res.status(200).json(allParts);
  } catch (error) {
    console.error("Error fetching parts by garageId", error);
    res.status(500).json({ error: "Could not fetch parts by garageId" });
  }
};

const insertManyParts = async (req, res) => {
  const partsToInsert = req.body;

  try {
    const insertedParts = await Part.insertMany(partsToInsert);
    res.status(201).json(insertedParts);
  } catch (error) {
    console.error("Error inserting many parts", error);
    res.status(500).json({ error: "Could not insert many parts" });
  }
};

module.exports = {
  createPart,
  deletePart,
  getAllParts,
  getAllPartsByGarageId,
  insertManyParts,
};
