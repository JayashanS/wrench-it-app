const fs = require("fs");
const path = require("path");
const Garage = require("../models/garageModel");
const crypto = require("crypto");
const hash = crypto.createHash("sha256");

const createGarage = async (req, res) => {
  const {
    email,
    oname,
    nic,
    phoneNumber,
    street,
    city,
    state,
    postalCode,
    repairCenterName,
    numOfWorkers,
    openingHours,
    closingHours,
    allDayService,
    statuS,
  } = req.body;

  try {
    const garageId = crypto.createHash("sha256").update(email).digest("hex");
    const update = {
      garageId: garageId,
      oname,
      nic,
      phoneNumber,
      street,
      city,
      state,
      postalCode,
      repairCenterName,
      numOfWorkers,
      openingHours,
      closingHours,
      allDayService,
      statuS,
    };

    // Find garage document by garageId
    const filter = { garageId: garageId };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    // Perform findOneAndUpdate
    const garage = await Garage.findOneAndUpdate(filter, update, options);

    res.status(200).json(garage);
  } catch (error) {
    console.error("Error creating/updating Garage document", error);
    res.status(500).json({ error: "Could not create/update Garage document" });
  }
};

const createGarageEmpty = async (req, res) => {
  const email = req.params.email;

  try {
    const garageId = crypto.createHash("sha256").update(email).digest("hex");
    const garage = await Garage.create({
      garageId: garageId,
    });

    res.status(201).json(garage);
  } catch (error) {
    console.error("Error creating Garage document", error);
    res.status(500).json({ error: "Could not create Garage document" });
  }
};
const updateGarageDetails = async (req, res) => {
  const email = req.params.email;
  const garageId = crypto.createHash("sha256").update(email).digest("hex");

  const {
    oname,
    nic,
    phoneNumber,
    street,
    city,
    state,
    postalCode,
    repairCenterName,
    numOfWorkers,
    openingHours,
    closingHours,
    allDayService,
    statuS,
  } = req.body;

  try {
    const updatedGarage = await Garage.findOneAndUpdate(
      { garageId: garageId },
      {
        $set: {
          oname,
          nic,
          phoneNumber,
          street,
          city,
          state,
          postalCode,
          repairCenterName,
          numOfWorkers,
          openingHours,
          closingHours,
          allDayService,
          statuS,
        },
      },
      { new: true }
    );

    if (!updatedGarage) {
      return res
        .status(404)
        .json({ message: "Garage not found", garageId: garageId });
    }

    res.status(200).json(updatedGarage);
  } catch (error) {
    console.error("Error updating garage details", error);
    res.status(500).json({ error: "Could not update garage details" });
  }
};

const updateGarageServicesAndCharges = async (req, res) => {
  const email = req.params.email;
  const garageId = crypto.createHash("sha256").update(email).digest("hex");

  const { services, categories, minCharge, maxCharge } = req.body;

  try {
    const updatedGarage = await Garage.findOneAndUpdate(
      { garageId: garageId },
      {
        $set: {
          services,
          categories,
          minCharge,
          maxCharge,
        },
      },
      { new: true }
    );

    if (!updatedGarage) {
      return res
        .status(404)
        .json({ message: "Garage not found", garageId: garageId });
    }

    res.status(200).json(updatedGarage);
  } catch (error) {
    console.error("Error updating services and charges for Garage", error);
    res.status(500).json({
      error: "Could not update services and charges for Garage",
    });
  }
};

const updateGarageLocation = async (req, res) => {
  const email = req.params.email;
  const garageId = crypto.createHash("sha256").update(email).digest("hex");
  const { location } = req.body;

  try {
    const updatedGarage = await Garage.findOneAndUpdate(
      { garageId: garageId },
      {
        $set: {
          location,
        },
      },
      { new: true }
    );

    if (!updatedGarage) {
      return res
        .status(404)
        .json({ message: "Garage not found", garageId: garageId });
    }

    res.status(200).json(updatedGarage);
  } catch (error) {
    console.error("Error updating location for Garage", error);
    res.status(500).json({ error: "Could not update location for Garage" });
  }
};

const getGarageById = async (req, res) => {
  const email = req.params.email;
  const garageId = crypto.createHash("sha256").update(email).digest("hex");

  try {
    const garage = await Garage.findOne({ garageId: garageId });

    if (!garage) {
      return res
        .status(404)
        .json({ message: "Garage not found", garageId: garageId });
    }

    res.status(200).json(garage);
  } catch (error) {
    console.error("Error retrieving Garage by ID", error);
    res.status(500).json({ error: "Could not retrieve Garage by ID" });
  }
};

const getGarageNameById = async (req, res) => {
  const email = req.params.email;
  const garageId = crypto.createHash("sha256").update(email).digest("hex");

  try {
    const garage = await Garage.findOne({ garageId: garageId });

    if (!garage) {
      return res
        .status(404)
        .json({ message: "Garage not found", garageId: garageId });
    }

    const garageName = garage.repairCenterName;

    res.status(200).json({ garageId: garageId, garageName: garageName });
  } catch (error) {
    console.error("Error retrieving Garage name by ID", error);
    res.status(500).json({ error: "Could not retrieve Garage name by ID" });
  }
};

const findNearbyRepairCenters = async (req, res) => {
  const { longitude, latitude } = req.body; // Assuming the frontend sends the user's coordinates

  try {
    const nearbyRepairCenters = await Garage.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [longitude, latitude], // User's coordinates
          },
          distanceField: "distance",
          spherical: true,
        },
      },
    ]);

    // Fetch photo for each garage and include additional fields in the response
    const garagesWithDetails = await Promise.all(
      nearbyRepairCenters.map(async (garage) => {
        const photoFileName = garage.garageId + ".jpg"; // Assuming the garageId is used as the filename
        const photoPath = path.join(
          __dirname,
          "../assets/garages",
          photoFileName
        );

        try {
          const photoData = await fs.promises.readFile(photoPath);
          const base64Photo = photoData.toString("base64");
          const photoUrl = `data:image/jpeg;base64,${base64Photo}`;

          // Include additional fields in the response
          return {
            ...garage,
            photoUrl,
            address: {
              street: garage.street,
              city: garage.city,
              state: garage.state,
              postalCode: garage.postalCode,
            },
            minCharge: garage.minCharge,
            maxCharge: garage.maxCharge,
          };
        } catch (error) {
          console.error("Error reading photo file:", error);
          // If photo not found or error reading file, return garage without photo
          return {
            ...garage,
            photoUrl: null,
            address: {
              street: garage.street,
              city: garage.city,
              state: garage.state,
              postalCode: garage.postalCode,
            },
            minCharge: garage.minCharge,
            maxCharge: garage.maxCharge,
          };
        }
      })
    );

    res.status(200).json(garagesWithDetails);
  } catch (error) {
    console.error("Error finding nearby repair centers", error);
    res.status(500).json({ error: "Could not find nearby repair centers" });
  }
};

const checkAccountExists = async (req, res) => {
  const email = req.params.email;
  const garageId = crypto.createHash("sha256").update(email).digest("hex");
  try {
    const existingGarage = await Garage.findOne({ garageId: garageId });
    return res.status(200).json({ exists: !!existingGarage });
  } catch (error) {
    console.error("Error checking if account exists:", error);
    return res.status(500).json({ error: "Could not check if account exists" });
  }
};

const getGarageId = (email) => {
  const garageId = crypto.createHash("sha256").update(email).digest("hex");
  return garageId;
};

const updateGarageDescription = async (req, res) => {
  const email = req.params.email;
  const garageId = crypto.createHash("sha256").update(email).digest("hex");

  const { description } = req.body;

  try {
    const updatedGarage = await Garage.findOneAndUpdate(
      { garageId: garageId },
      {
        $set: {
          description: description,
        },
      },
      { new: true }
    );

    if (!updatedGarage) {
      return res
        .status(404)
        .json({ message: "Garage not found", garageId: garageId });
    }

    res.status(200).json(updatedGarage);
  } catch (error) {
    console.error("Error updating description for Garage", error);
    res.status(500).json({ error: "Could not update description for Garage" });
  }
};

module.exports = {
  createGarage,
  updateGarageDetails,
  updateGarageServicesAndCharges,
  updateGarageLocation,
  getGarageById,
  getGarageNameById,
  findNearbyRepairCenters,
  checkAccountExists,
  createGarageEmpty,
  getGarageId,
  updateGarageDescription,
};
