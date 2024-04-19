const Request = require("../models/requestModel");

const createRequest = async (req, res) => {
  const {
    licensePlateNo,
    model,
    fault,
    userEmail,
    garageId,
    phoneNo,
    date,
    longitude,
    latitude,
    status,
    response,
  } = req.body;

  try {
    const lastRequest = await Request.findOne(
      {},
      {},
      { sort: { requestId: -1 } }
    );
    const lastRequestId = lastRequest ? lastRequest.requestId : 0;
    const requestId = lastRequestId + 1;

    const request = await Request.create({
      requestId,
      licensePlateNo,
      model,
      fault,
      userEmail,
      garageId,
      phoneNo,
      date,
      longitude,
      latitude,
      status,
      repair: false,
      response,
    });
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ error: "Could not create request" });
  }
};

const updateRequestStatus = async (req, res) => {
  const requestId = req.params.id;

  try {
    const updatedRequest = await Request.findByIdAndUpdate(
      requestId,
      { status: "Declined" },
      { new: true }
    );

    if (!updatedRequest) {
      return res
        .status(404)
        .json({ message: "Request not found", updatedRequestId: requestId });
    }

    res.status(200).json(updatedRequest);
  } catch (error) {
    console.error("Error updating request status:", error);
    res.status(500).json({ error: "Could not update request status" });
  }
};

const getIncomingRequests = async (req, res) => {
  try {
    const incomingRequests = await Request.find({ status: "Incoming" });
    res.status(200).json(incomingRequests);
  } catch (error) {
    console.error("Error fetching incoming requests:", error);
    res.status(500).json({ error: "Could not fetch incoming requests" });
  }
};

const deleteRequest = async (req, res) => {
  try {
    const requestId = req.params.id;
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

const insertManyRequests = async (req, res) => {
  const requestsToInsert = req.body;

  try {
    const insertedRequests = await Request.insertMany(requestsToInsert);
    res.status(201).json(insertedRequests);
  } catch (error) {
    console.error("Error inserting many requests:", error);
    res.status(500).json({ error: "Could not insert many requests" });
  }
};

const getAllRequests = async (req, res) => {
  try {
    const allRequests = await Request.find();
    res.status(200).json(allRequests);
  } catch (error) {
    console.error("Error fetching all requests:", error);
    res.status(500).json({ error: "Could not fetch all requests" });
  }
};

const checkStatus = async (req, res) => {
  try {
    const statusRequest = await Request.find();
    res.status(200).json(statusRequest);
  } catch (error) {
    console.error("Error changing status :", error);
    res.status(500).json({ error: "Could not change status of the request" });
  }
};

const acceptRequest = async (req, res) => {
  const requestId = req.params.id;

  try {
    const updatedRequest = await Request.findByIdAndUpdate(
      requestId,
      { requestStatus: "Accepted" },
      { new: true }
    );

    if (!updatedRequest) {
      return res
        .status(404)
        .json({ message: "Request not found", updatedRequestId: requestId });
    }

    res.status(200).json(updatedRequest);
  } catch (error) {
    console.error("Error updating request status:", error);
    res.status(500).json({ error: "Could not update request status" });
  }
};

const getAcceptedRequest = async (req, res) => {
  try {
    const incomingRequests = await Request.find({ requestStatus: "Accepted" });
    res.status(200).json(incomingRequests);
  } catch (error) {
    console.error("Error fetching incoming requests:", error);
    res.status(500).json({ error: "Could not fetch incoming requests" });
  }
};

module.exports = {
  createRequest,
  deleteRequest,
  insertManyRequests,
  getAllRequests,
  updateRequestStatus,
  getIncomingRequests,
  checkStatus,
  acceptRequest,
  getAcceptedRequest,
};
