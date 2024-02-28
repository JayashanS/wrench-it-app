const express = require("express");
const router = express.Router();
const {
  uploadUserPhoto,
  getUserPhoto,
} = require("../controllers/photoController");

router.post("/upload", uploadUserPhoto);
router.get("/:fileName", getUserPhoto);

module.exports = router;
