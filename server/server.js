require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

//const ownerRoutes = require('./routes/owner')
//const vehicleRoutes = require('./routes/vehicle')
//const requestRoutes = require('./routes/request')
//const repairRoutes = require('./routes/repair')y
const garageRoutes = require("./routes/garage");
//const partRoutes = require('./routes/part')

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // if you're using cookies or authentication
  })
);

//routes
app.use("/api/garage", garageRoutes);

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
