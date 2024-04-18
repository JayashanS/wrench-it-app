const express = require("express");
const {
  updateGarageDetails,
  updateGarageServicesAndCharges,
  updateGarageLocation,
  getGarageById,
  getGarageNameById,
  findNearbyRepairCenters,
  checkAccountExists,
  getGarageId,
  updateGarageDescription,
} = require("../controllers/garageController");
const router = express.Router();

router.post("/des/:email", updateGarageDescription);
router.put("/:email", updateGarageDetails);
router.get("/:email", getGarageById);
router.get("/:id/:email", getGarageId);
router.put("/services/:email", updateGarageServicesAndCharges);
router.put("/location/:email", updateGarageLocation);
router.get("/name/:email", getGarageNameById);
router.post("/near/all", findNearbyRepairCenters);
router.get("/exists/:email", checkAccountExists);
module.exports = router;
