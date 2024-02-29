const express = require("express");
const {
  createReservation,
  deleteReservation,
  getAllReservations,
  insertManyReservations,
  getReservationsByFilter,
  getPendingReservations,
  deletePendingReservation,
  updateReservation,
  acceptReservation,
} = require("../controllers/reservationController");
const router = express.Router();

router.post("/", createReservation);
router.post("/n",  insertManyReservations);
router.get("/",  getAllReservations);
router.get(  "/filter/:reservationDate", getReservationsByFilter); 
router.get("/pending",getPendingReservations);
router.delete("/:id", deleteReservation);
router.delete("/:id",deletePendingReservation);
router.put("/:id",updateReservation);
router.put("/accept/:id",acceptReservation);
module.exports = router;
