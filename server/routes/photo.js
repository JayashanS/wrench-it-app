const express = require("express");
const router = express.Router();
const { uploadPhoto, getPhoto } = require("../controllers/photoController");

router.post("/upload", uploadPhoto);
router.get("/:fileName", getPhoto);

module.exports = router;
