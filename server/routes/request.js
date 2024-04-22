const express = require("express");
const {
  createRequest,
  deleteRequest,
  getAllRequests,
  insertManyRequests,
  getIncomingRequests,
  updateRequestStatus,
  getUserRequests,
  updateRequestStatusAndResponse,
} = require("../controllers/requestController");
const router = express.Router();

router.post("/", createRequest);
router.post("/n", insertManyRequests);
router.get("/", getAllRequests);
router.get("/user/:userEmail", getUserRequests);
router.delete("/:id", deleteRequest);
router.get("/incoming/:garageId", getIncomingRequests);
router.put("/dec/:id", updateRequestStatus);
router.put("/acc/:id", updateRequestStatusAndResponse);
module.exports = router;
