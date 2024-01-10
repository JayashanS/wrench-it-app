const express = require("express");
const {
  createRequest,
  deleteRequest,
} = require("../controllers/requestController");
const router = express.Router();

router.post("/", createRequest);
router.delete("/:id", deleteRequest);
module.exports = router;
