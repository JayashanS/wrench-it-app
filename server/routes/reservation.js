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
  getReservationsByEmail,
  getReservationsByGarageId,
} = require("../controllers/reservationController");
const router = express.Router();

router.post("/", createReservation);
router.post("/n", insertManyReservations);

router.get("/", getAllReservations);
router.get("/filter/:date/:garageId", getReservationsByFilter);
router.get("/pending/:garageId", getPendingReservations);
router.get("/user/:email", getReservationsByEmail);
router.get("/garage/:garageId", getReservationsByGarageId);

router.delete("/:id", deleteReservation);
router.delete("/:id", deletePendingReservation);
router.put("/:id", updateReservation);

module.exports = router;
