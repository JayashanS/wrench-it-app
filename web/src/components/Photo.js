import React, { useState } from "react";
import "../styles/Photo.css";

const PhotoUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [displayUrl, setDisplayUrl] = useState(null); // New state for displaying the uploaded photo

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file)); // Create a temporary URL for preview
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadError("Please select a file.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.email) {
      setUploadError("User data not found in local storage.");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("photo", selectedFile);
      formData.append("fileName", `${user.email}.jpg`);

      const response = await fetch("http://localhost:4000/api/photo/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload photo.");
      }

      setUploadError(null);
      setSelectedFile(null);
      setPreviewUrl(null); // Clear preview after successful upload

      // Retrieve and display the uploaded photo
      const photoResponse = await fetch(
        `http://localhost:4000/api/photo/${user.email}.jpg`
      );
      if (photoResponse.ok) {
        const photoUrl = await photoResponse.blob();
        setDisplayUrl(URL.createObjectURL(photoUrl));
      } else {
        throw new Error("Failed to retrieve uploaded photo.");
      }
    } catch (error) {
      console.error("Error uploading photo:", error);
      setUploadError("An error occurred while uploading the photo.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="photo-container">
      <input type="file" onChange={handleFileChange} />
      {previewUrl && (
        <img src={previewUrl} alt="Preview" style={{ maxWidth: "100%" }} />
      )}
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Photo"}
      </button>
      {displayUrl && (
        <div>
          <p>Uploaded Photo:</p>
          <img src={displayUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
        </div>
      )}
      {uploadError && <p>{uploadError}</p>}
    </div>
  );
};

export default PhotoUploadComponent;
