const crypto = require("crypto");

const Counter = require("../models/counterModel");
const Reservation = require("../models/reservationModel");

const createReservation = async (req, res) => {
  const {
    licensePlateNo,
    model,
    fault,
    userEmail,
    garageId,
    phoneNo,
    date,
    status,
  } = req.body;

  try {
    let counter = await Counter.findOneAndUpdate(
      { _id: "reservationId" },
      { $inc: { sequence_value: 1 } },
      { new: true, upsert: true }
    );

    const reservationId = counter.sequence_value;

    const reservation = await Reservation.create({
      reservationId,
      licensePlateNo,
      model,
      fault,
      userEmail,
      garageId,
      phoneNo,
      date,
      status,
      repair: false,
    });

    res.status(201).json(reservation);
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({ error: "Could not create reservation" });
  }
};

module.exports = createReservation;

const getReservationsByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const reservations = await Reservation.aggregate([
      {
        $match: { userEmail: email },
      },
      {
        $lookup: {
          from: "garages",
          localField: "garageId",
          foreignField: "garageId",
          as: "garageDetails",
        },
      },
      {
        $project: {
          _id: 1,
          licensePlateNo: 1,
          model: 1,
          fault: 1,
          userEmail: 1,
          garageId: 1,
          phoneNo: 1,
          date: 1,
          status: 1,
          "garageDetails.repairCenterName": 1,
          combinedAddress: {
            $concat: [
              { $arrayElemAt: ["$garageDetails.city", 0] },
              ", ",
              { $arrayElemAt: ["$garageDetails.street", 0] },
              ", ",
              { $arrayElemAt: ["$garageDetails.state", 0] },
              ", ",
              { $arrayElemAt: ["$garageDetails.postalCode", 0] },
            ],
          },
        },
      },
    ]);

    res.status(200).json(reservations);
  } catch (error) {
    console.error("Error fetching reservations by email:", error);
    res.status(500).json({ error: "Could not fetch reservations by email" });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;
    const deletedReservation = await Reservation.deleteOne({
      _id: reservationId,
    });

    if (deletedReservation.deletedCount === 0) {
      return res.status(404).json({
        message: "Reservation not found",
        deletedReservationId: reservationId,
      });
    }

    return res
      .status(200)
      .json({ message: "Reservation deleted successfully" });
  } catch (error) {
    console.error("Error deleting reservation:", error);
    return res.status(500).json({ error: "Could not delete reservation" });
  }
};

const insertManyReservations = async (req, res) => {
  const reservationsToInsert = req.body;

  try {
    const insertedReservations = await Reservation.insertMany(
      reservationsToInsert
    );
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
    const { date, garageId } = req.params;
    if (!date || isNaN(Date.parse(date))) {
      return res.status(400).json({ error: "Invalid date parameter" });
    }

    const startDate = new Date(date);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 1);

    const filter = {
      date: { $gte: startDate, $lt: endDate },
      garageId: garageId,
      status: "Accepted",
    };

    const filteredReservations = await Reservation.find(filter);

    res.status(200).json(filteredReservations);
  } catch (error) {
    console.error("Error fetching reservations by filter:", error);
    res.status(500).json({ error: "Could not fetch reservations by filter" });
  }
};

const getPendingReservations = async (req, res) => {
  try {
    const { garageId } = req.params;

    const pendingReservations = await Reservation.find({
      garageId: garageId,
      status: "Pending",
    });

    res.status(200).json(pendingReservations);
  } catch (error) {
    console.error("Error fetching pending reservations:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deletePendingReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;
    const deletedReservation = await Reservation.findOneAndDelete({
      _id: reservationId,
      reservationStatus: "Pending",
    });

    if (!deletedReservation) {
      return res.status(404).json({
        message: "Pending reservation not found or already processed",
      });
    }

    return res
      .status(200)
      .json({ message: "Pending reservation deleted successfully" });
  } catch (error) {
    console.error("Error deleting pending reservation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateReservation = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  try {
    const updatedReservation = await Reservation.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          status: status,
        },
      },
      { new: true }
    );

    if (!updatedReservation) {
      return res
        .status(404)
        .json({ message: "Reservation not found", _id: id });
    }

    res.status(200).json(updatedReservation);
  } catch (error) {
    console.error("Error updating reservation", error);
    res.status(500).json({ error: "Could not update reservation", error });
  }
};

const acceptReservation = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  try {
    const updatedReservation = await Reservation.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          reservationStatus: status,
        },
      },
      { new: true }
    );

    if (!updatedReservation) {
      return res.status(404).json({ message: "Not Update", _id: id });
    }

    res.status(200).json(updatedReservation);
  } catch (error) {
    console.error("Error updating reservation", error);
    res.status(500).json({ error: "Could not update reservation", error });
  }
};

// Function to retrieve reservations by garageId
const getReservationsByGarageId = async (req, res) => {
  const { garageId } = req.params;

  try {
    const hashedGarageId = crypto
      .createHash("sha256")
      .update(garageId)
      .digest("hex");
    const reservations = await Reservation.find({
      reservationtId: { $regex: `.*${hashedGarageId}` },
    });
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch reservations" });
  }
};

module.exports = {
  createReservation,
  deleteReservation,
  insertManyReservations,
  getAllReservations,
  getReservationsByFilter,
  getPendingReservations,
  deletePendingReservation,
  updateReservation,
  acceptReservation,
  getReservationsByEmail,
  getReservationsByGarageId,
};
