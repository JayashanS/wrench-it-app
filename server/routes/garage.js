const express = require("express");
const {
  createGarage,
  updateGarageDetails,
  updateGarageServicesAndCharges,
  updateGarageLocation,
  getGarageById,
} = require("../controllers/garageController");
const router = express.Router();

router.post("/", createGarage);
router.put("/:garageId", updateGarageDetails);
router.get("/:garageId", getGarageById);
router.put("/services/:garageId", updateGarageServicesAndCharges);
router.put("/location/:garageId", updateGarageLocation);
module.exports = router;
