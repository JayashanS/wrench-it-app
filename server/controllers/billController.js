const Bill = require("../models/billModel");

//create Repair

const createBill = async (req, res) => {
  const { repairId, licensePlateNo,model,fault, date,partID,partName, quantity,
    unitPrice,totalPartPrice,service,serviceCost,totalCost } = req.body;

  try {
    const bill = await Bill.create({
      repairId,
      licensePlateNo,
      model,
      fault,
      date,
      partID,
      partName,
      quantity,
      unitPrice,
      totalPartPrice,
      service,
      serviceCost,
      totalCost
    });
    res.status(201).json(bill);
  } catch (error) {
    res.status(500).json({ error: "could not create bill" });
  }
};

const getBill = async (req, res) => {
  try {
    // Fetch all repair records from the database
    const repair = await Bill.find();
    res.status(200).json(bill);
  } catch (error) {
    res.status(500).json({ error: "could not retrieve bill" });
  }
};



module.exports = { createBill,getBill};
