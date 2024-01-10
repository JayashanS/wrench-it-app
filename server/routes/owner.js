const express = require("express");
const { createOwner, deleteOwner } = require("../controllers/ownerController");
const router = express.Router();

router.post("/", createOwner);
router.delete("/:id", deleteOwner);
module.exports = router;
