const Reservation = require("../models/reservationModel");

const createReservation = async (req, res) => {
  const { reservationtId, vehicleType, reservationStatus, reservationtDate, reservationtTime, customerName, contactNo, description } = req.body;

  try {
    const reservation = await Reservation.create({
      reservationtId,
      vehicleType,
      reservationStatus: reservationStatus.toUpperCase(), // Convert to uppercase
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

const getReservationsByFilter = async (req, res) => {
  try {
    const { reservationDate } = req.params;

    const filter = {};
    if (reservationDate) {
           const startDate = new Date(reservationDate);
      const endDate = new Date(reservationDate);
      endDate.setDate(endDate.getDate() + 1); 
      filter.reservationtDate = { $gte: startDate, $lt: endDate };
    }

    const filteredReservations = await Reservation.find(filter);

    res.status(200).json(filteredReservations);
  } catch (error) {
    console.error("Error fetching reservations by filter:", error);
    res.status(500).json({ error: "Could not fetch reservations by filter" });
  }
};


const getPendingReservations = async (req, res) => {
  try {
    const pendingReservations = await Reservation.find({ reservationStatus: 'pending' }); 
    res.status(200).json(pendingReservations);
  } catch (error) {
    console.error('Error fetching pending reservations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




const deletePendingReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;
    const deletedReservation = await Reservation.findOneAndDelete({ _id: reservationId, reservationStatus: 'Pending' });

    if (!deletedReservation) {
      return res.status(404).json({ message: "Pending reservation not found or already processed" });
    }

    return res.status(200).json({ message: "Pending reservation deleted successfully" });
  } catch (error) {
    console.error('Error deleting pending reservation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateReservation =async (req,res)=>{

  const reservationtId = req.params.id;
  const  {reservationStatus} =req.body;

  try {
    const updatedReservation = await Reservation.findOneAndUpdate(
      { reservationtId: reservationtId },
      {
        $set: {
          reservationStatus:"completed"
        },
      },
      { new: true }
    );

    if (!updatedReservation) {
      return res
        .status(404)
        .json({ message: "Garage not found", reservationtId: reservationtId });
    }

    res.status(200).json(updatedReservation);
  } catch (error) {
    console.error("Error updating reservation", error);
    res.status(500).json({ error: "Could not update reservation",error });
  }
}


module.exports = {
  createReservation,
  deleteReservation,
  insertManyReservations,
  getAllReservations,
  getReservationsByFilter,
  getPendingReservations,
  deletePendingReservation,
  updateReservation,
};
