const express = require("express");
const {
  createGarage,
  getAllGarages,
  deleteGarage,
} = require("../controllers/garageController");
const router = express.Router();

router.post("/", createGarage);
router.get("/", getAllGarages);
router.delete("/:id", deleteGarage);
module.exports = router;
