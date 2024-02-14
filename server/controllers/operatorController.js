const Operator = require("../models/operatorModel");

// Create an operator
const createOperator = async (req, res) => {
  const { garageId, opId, pw, role } = req.body;

  try {
    const operator = await Operator.create({
      garageId,
      opId,
      pw,
      role: role || "Operator", // Default role to "Operator" if not provided
    });

    res.status(201).json(operator);
  } catch (error) {
    res.status(500).json({ error: "Could not create Operator" });
  }
};

// Delete an operator by garage ID and operator ID
const deleteOperator = async (req, res) => {
  const { garageId, opId } = req.params;

  try {
    const deletedOperator = await Operator.findOneAndDelete({ garageId, opId });

    if (!deletedOperator) {
      return res.status(404).json({ message: "Operator not found" });
    }

    return res.status(200).json({ message: "Operator successfully deleted" });
  } catch (error) {
    console.error("Error deleting Operator", error);
    return res.status(500).json({ error: "Could not delete Operator" });
  }
};

// Get operators by garage ID
const getOperatorsByGarageId = async (req, res) => {
  const { garageId } = req.params;

  try {
    const operators = await Operator.find({ garageId });
    res.status(200).json(operators);
  } catch (error) {
    console.error("Error fetching operators by garage ID", error);
    res.status(500).json({ error: "Could not fetch operators" });
  }
};

module.exports = {
  createOperator,
  deleteOperator,
  getOperatorsByGarageId,
};
