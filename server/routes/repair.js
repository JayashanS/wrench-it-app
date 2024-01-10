const express = require("express");
const {
  createRepair,

  deleteRepair,
} = require("../controllers/repairController");
const router = express.Router();

router.post("/", createRepair);

router.delete("/:id", deleteRepair);
module.exports = router;
