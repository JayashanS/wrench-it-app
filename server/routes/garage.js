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
  createGarageEmpty,
  getGarageId,
  updateGarageDescription,
} = require("../controllers/garageController");
const router = express.Router();

router.post("/", createGarage);
router.post("/empty/:email", createGarageEmpty);
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
