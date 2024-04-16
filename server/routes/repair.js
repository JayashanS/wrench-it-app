const express = require("express");
const {
  createRepair,
  getAllRepair,
  deleteRepair,
} = require("../controllers/repairController");
const router = express.Router();

router.post("/create/:email", createRepair);
router.get("/get/:email", getAllRepair);
router.delete("/:id", deleteRepair);
module.exports = router;
