const express = require("express");
const {
  createOwner,
  deleteOwner,
  getOwnerByNIC,
  updateOwnerByNIC,
} = require("../controllers/ownerController");
const router = express.Router();

router.post("/", createOwner);
router.delete("/:id", deleteOwner);
router.put("/:nic", updateOwnerByNIC);
router.get("/:nic", getOwnerByNIC);
module.exports = router;
