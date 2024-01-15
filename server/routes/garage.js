const express = require("express");
const {
  createGarage,
  getAllGarages,
  deleteGarage,
  getGarageByOwnerId,
  updateGarage,
} = require("../controllers/garageController");
const router = express.Router();

router.post("/", createGarage);
router.get("/", getAllGarages);
router.get("/:ownerID", getGarageByOwnerId);
router.put("/:ownerId", updateGarage);
router.delete("/:id", deleteGarage);
module.exports = router;
