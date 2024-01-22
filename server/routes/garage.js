const express = require("express");
const {
  createGarage,
  updateGarageServicesAndCharges,
  updateGarageLocation,
} = require("../controllers/garageController");
const router = express.Router();

router.post("/", createGarage);
router.put("/services/:garageId", updateGarageServicesAndCharges);
router.put("/location/:garageId", updateGarageLocation);
module.exports = router;
