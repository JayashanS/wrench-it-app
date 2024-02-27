const express = require("express");
const {
  createGarage,
  updateGarageDetails,
  updateGarageServicesAndCharges,
  updateGarageLocation,
  getGarageById,
  getGarageNameById,
  findNearbyRepairCenters,
  checkAccountExists,
} = require("../controllers/garageController");
const router = express.Router();

router.post("/", createGarage);
router.put("/:email", updateGarageDetails);
router.get("/:email", getGarageById);
router.put("/services/:email", updateGarageServicesAndCharges);
router.put("/location/:email", updateGarageLocation);
router.get("/name/:email", getGarageNameById);
router.post("/near/all", findNearbyRepairCenters);
router.get("/exists/:email", checkAccountExists);
module.exports = router;
