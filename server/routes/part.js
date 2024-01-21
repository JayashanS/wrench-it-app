const express = require("express");
const {
  createPart,
  deletePart,
  getAllParts,
 
} = require("../controllers/partController");
const router = express.Router();

router.post("/", createPart);
router.get("/", getAllParts);
router.delete("/:id", deletePart);

module.exports = router;
