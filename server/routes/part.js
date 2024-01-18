const express = require("express");
const {
  createPart,
  deletePart,
  getAllParts,
  getAllPartsByGarageId,
  insertManyParts,
} = require("../controllers/partController");
const router = express.Router();

router.post("/", createPart);
router.get("/", getAllParts);
router.delete("/:id", deletePart);
router.get("/:garageId", getAllPartsByGarageId);
router.post("/n", insertManyParts);
module.exports = router;
