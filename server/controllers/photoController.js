const fs = require("fs");
const path = require("path");

const uploadPhoto = (req, res) => {
  const { fileName } = req.body;
  const photo = req.files && req.files.photo;

  if (!photo) {
    return res.status(400).json({ error: "No photo provided" });
  }

  const uploadDir = path.join(__dirname, "../assets");
  const filePath = path.join(uploadDir, fileName);

  photo.mv(filePath, (err) => {
    if (err) {
      console.error("Error saving file:", err);
      return res.status(500).json({ error: "Error saving photo" });
    }
    res.status(200).json({ message: "Photo uploaded successfully" });
  });
};

const getPhoto = (req, res) => {
  const { fileName } = req.params;

  const uploadDir = path.join(__dirname, "../assets");
  const filePath = path.join(uploadDir, fileName);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(404).json({ error: "Photo not found" });
    }

    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.end(data);
  });
};

module.exports = { uploadPhoto, getPhoto };
