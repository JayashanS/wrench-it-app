const express = require("express");
const {
  createRepair,
  getAllRepair,
  deleteRepair,
} = require("../controllers/repairController");
const router = express.Router();

router.post("/", createRepair);
router.get("/", getAllRepair);
router.delete("/:id", deleteRepair);
module.exports = router;
