const Reservation = require("../models/reservationModel");

const createReservation = async (req, res) => {
  const { reservationtId, vehicleType, reservationStatus, reservationtDate, reservationtTime, customerName, contactNo, description } = req.body;

  try {
    const reservation = await Reservation.create({
      reservationtId,
      vehicleType,
      reservationStatus,
      reservationtDate,
      reservationtTime,
      customerName,
      contactNo,
      description,
    });
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: "Could not create reservation" });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;
    const deletedReservation = await Reservation.findByIdAndDelete(reservationId);

    if (!deletedReservation) {
      return res
        .status(404)
        .json({ message: "Reservation not found", deletedReservationId: reservationId });
    }

    return res.status(200).json({ message: "Reservation deleted successfully" });
  } catch (error) {
    console.error("Error deleting reservation:", error);
    return res.status(500).json({ error: "Could not delete reservation" });
  }
};

const insertManyReservations = async (req, res) => {
  const reservationsToInsert = req.body;

  try {
    const insertedReservations = await Reservation.insertMany(reservationsToInsert);
    res.status(201).json(insertedReservations);
  } catch (error) {
    console.error("Error inserting many reservations:", error);
    res.status(500).json({ error: "Could not insert many reservations" });
  }
};

const getAllReservations = async (req, res) => {
  try {
    const allReservations = await Reservation.find();
    res.status(200).json(allReservations);
  } catch (error) {
    console.error("Error fetching all reservations:", error);
    res.status(500).json({ error: "Could not fetch all reservations" });
  }
};

module.exports = {
  createReservation,
  deleteReservation,
  insertManyReservations,
  getAllReservations,
};
