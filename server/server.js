require("dotenv").config();

const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const cors = require("cors");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const path = require("path");

const userRoutes = require("./routes/user");
const ownerRoutes = require("./routes/owner");
const vehicleRoutes = require("./routes/vehicle");
const repairRoutes = require("./routes/repair");
const requestRoutes = require("./routes/request");
const garageRoutes = require("./routes/garage");
const partRoutes = require("./routes/part");
const reservationRoutes = require("./routes/reservation");
const operatorRoutes = require("./routes/operator");
const photoRoutes = require("./routes/photo");
const offerRoutes = require("./routes/offer");
const billRoutes = require("./routes/bill");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: ["http://localhost:3000", "http://192.168.238.68:8081"],
    methods: ["GET", "POST"],
  },
});
app.get("/", (req, res) => {
  res.send("WebSocket server is running!");
});

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8080"],
    credentials: true,
  })
);
app.use(cors());
app.use(fileUpload());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/owner", ownerRoutes);
app.use("/api/vehicle", vehicleRoutes);
app.use("/api/request", requestRoutes);
app.use("/api/repair", repairRoutes);
app.use("/api/garage", garageRoutes);
app.use("/api/part", partRoutes);
app.use("/api/reservation", reservationRoutes);
app.use("/api/operator", operatorRoutes);
app.use("/api/photo", photoRoutes);
app.use("/api/offer", offerRoutes);
app.use("/api/bill", billRoutes);

// WebSocket logic
io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (data) => {
    console.log("Received message:", data);

    // Broadcast the message to all connected clients
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  // Log data received on the "location" event
  socket.on("location", (data) => {
    console.log("Received Garage Id:", data);

    // Broadcast the location data to all connected clients
    io.emit("location", data);
  });
});

// Connect to the database and start listening
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log("Express server listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
