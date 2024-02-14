const express = require("express");
const {
  createOperator,
  getOperatorsByGarageId,
  deleteOperator,
} = require("../controllers/operatorController");
const router = express.Router();

router.post("/", createOperator);
router.get("/:garageId", getOperatorsByGarageId);
router.delete("/:itemId", deleteOperator);

module.exports = router;
