const express = require("express");
const { createVehicle, deleteVehiclebyLIC } = require("../controllers/vehicleController");
const router = express.Router();

router.post("/", createVehicle);
router.delete("/:id", deleteVehiclebyLIC);
module.exports = router;
