const express = require("express");
const {
  createRequest,
  deleteRequest,
  getAllRequests,
  insertManyRequests,
  getIncomingRequests,
  updateRequestStatus,
} = require("../controllers/requestController");
const router = express.Router();

router.post("/", createRequest);
router.post("/n", insertManyRequests);
router.get("/", getAllRequests);
router.delete("/:id", deleteRequest);
router.get("/incoming/:garageId", getIncomingRequests);
router.put("/dec/:id", updateRequestStatus);
module.exports = router;
