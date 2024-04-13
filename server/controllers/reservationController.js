const Reservation = require("../models/reservationModel");
const crypto = require("crypto");

const createReservation = async (req, res) => {
  const {
    email,
    garageId,
    vehicleType,
    reservationStatus,
    reservationtDate,
    reservationtTime,
    customerName,
    contactNo,
    description,
  } = req.body;

  try {
    const hashedEmail = crypto.createHash("sha256").update(email).digest("hex");
    const reservationtId = `${hashedEmail}.${garageId}`;

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
    const pendingReservations = await Reservation.find({
      reservationStatus: "pending",
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
  const reservationtId = req.params.id;
  const { reservationStatus } = req.body;

  try {
    const updatedReservation = await Reservation.findOneAndUpdate(
      { reservationtId: reservationtId },
      {
        $set: {
          reservationStatus: "completed",
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
    res.status(500).json({ error: "Could not update reservation", error });
  }
};

const acceptReservation = async (req, res) => {
  const reservationtId = req.params.id;
  const { reservationStatus } = req.body;

  try {
    const updatedReservation = await Reservation.findOneAndUpdate(
      { reservationtId: reservationtId },
      {
        $set: {
          reservationStatus: "confirm",
        },
      },
      { new: true }
    );

    if (!updatedReservation) {
      return res
        .status(404)
        .json({ message: "Not Update", reservationtId: reservationtId });
    }

    res.status(200).json(updatedReservation);
  } catch (error) {
    console.error("Error updating reservation", error);
    res.status(500).json({ error: "Could not update reservation", error });
  }
};

const getReservationsByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const hashedEmail = crypto.createHash("sha256").update(email).digest("hex");

    const reservations = await Reservation.aggregate([
      {
        $match: { reservationtId: { $regex: `${hashedEmail}.*` } },
      },
      {
        $addFields: {
          emailHash: {
            $arrayElemAt: [{ $split: ["$reservationtId", "."] }, 0],
          },
          garageId: { $arrayElemAt: [{ $split: ["$reservationtId", "."] }, 1] },
        },
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
          vehicleType: 1,
          reservationStatus: 1,
          reservationtDate: 1,
          reservationtTime: 1,
          customerName: 1,
          contactNo: 1,
          description: 1,
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
