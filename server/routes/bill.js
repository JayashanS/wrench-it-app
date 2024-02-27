const express = require("express");
const {
  createBill, getBill,
  
} = require("../controllers/billController");
const router = express.Router();

router.post("/", createBill);
router.get("/", getBill);
module.exports = router;
