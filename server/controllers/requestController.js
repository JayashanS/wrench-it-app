const Request = require("../models/requestModel");

const createRequest = async (req, res) => {
  const { requestId, requestType, requestStatus, requestDate } = req.body;

  try {
    const request = await Request.create({
      requestId,
      requestStatus,
      requestDate,
      ownerName,
      vehicleType,
      mobileNo,
      longitude,
      lattitude,
    });
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ error: "Could not create request" });
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

const checkStatus = async (req,res)=>{
  try{
    const statusRequest = await Request.find();
    res.status(200).json(statusRequest);
  }catch(error){
    console.error("Error changing status :",error);
    res.status(500).json({error : "Could not change status of the request"});
  }
}

module.exports = {
  createRequest,
  deleteRequest,
  insertManyRequests,
  getAllRequests,
};
