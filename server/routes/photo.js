const express = require("express");
const router = express.Router();
const {
  uploadUserPhoto,
  getUserPhoto,
  uploadGaragePhoto,
  getGaragePhoto,
} = require("../controllers/photoController");

router.post("/user/upload", uploadUserPhoto);
router.get("/user/:fileName", getUserPhoto);
router.post("/garage/upload", uploadGaragePhoto);
router.get("/garage/:fileName", getGaragePhoto);

module.exports = router;
