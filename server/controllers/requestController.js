const Garage = require("../models/requestModel");

const createRequest = async (req, res) => {
  const {
    requestId,
    requestType,
    requestStatus,
    requestDate,

  } = req.body;

  try {
    const request = await Request.create({
       requestId,
       requestType,
       requestStatus,
       requestDate,
    });
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ error: "Could not create request" });
  }
};




const deleteRequest = async (req, res) => {
  console.log("Request parameters:", req.params.id);
  try {
    const requestId = req.params.id; // Correctly retrieve the ID from req.params
    console.log("Received requestId:", requestId); // Log received ID for debugging

    const deletedRequest = await Request.findByIdAndDelete(requestId);

    if (!deletedRequest) {
      return res
        .status(404)
        .json({ message: "Request not found", deletedRequestId: requestId });
    }

    return res.status(200).json({ message: "Request deleted successfully" });
  } catch (error) {
    console.error("Error deleting request:", error);
    return res.status(500).json({ error: "Could not delete request" });
  }
};

module.exports = { createRequest, deleteRequest };
