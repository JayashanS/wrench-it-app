const express = require("express");
const {
  createReservation,
  deleteReservation,
  getAllReservations,
  insertManyReservations,
} = require("../controllers/reservationController");
const router = express.Router();

router.post("/", createReservation);
router.post("/n",  insertManyReservations);
router.get("/",  getAllReservations);
router.delete("/:id", deleteReservation);
module.exports = router;
