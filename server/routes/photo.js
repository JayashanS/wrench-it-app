const express = require("express");
const router = express.Router();
const { uploadPhoto } = require("../controllers/photoController");

router.post("/upload", uploadPhoto);

module.exports = router;
