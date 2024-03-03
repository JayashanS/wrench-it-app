const express = require("express");
const {
  createRequest,
  deleteRequest,
  getAllRequests,
  insertManyRequests,
  getIncomingRequests,
  updateRequestStatus,
  acceptRequest,
  getAcceptedRequest,
  holdRequest,
  getholdRequest,
} = require("../controllers/requestController");
const router = express.Router();

router.post("/", createRequest);
router.post("/n", insertManyRequests);
router.get("/", getAllRequests);
router.delete("/:id", deleteRequest);
router.get("/incoming",getIncomingRequests);
router.put("/dec/:id",updateRequestStatus);
router.put("/accept/:id",acceptRequest);
router.get("/accpeted",getAcceptedRequest);
router.put("/hold/:id",holdRequest);
router.get("/holding",getholdRequest);

module.exports = router;
