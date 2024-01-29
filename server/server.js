require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const ownerRoutes = require("./routes/owner");
const vehicleRoutes = require("./routes/vehicle");
const repairRoutes = require("./routes/repair");
const requestRoutes = require("./routes/request");
const garageRoutes = require("./routes/garage");
const partRoutes = require("./routes/part");
const reservationRoutes = require("./routes/reservation");

//const partRoutes = require('./routes/part')

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8080"],
    credentials: true,
  })
);

// routes
app.use("/api/user", userRoutes);
app.use("/api/owner", ownerRoutes);
app.use("/api/vehicle", vehicleRoutes);
app.use("/api/request", requestRoutes);
app.use("/api/repair", repairRoutes);
app.use("/api/garage", garageRoutes);
app.use("/api/part", partRoutes);
app.use("/api/reservation", reservationRoutes);

// connecting to the database and start listning...
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
