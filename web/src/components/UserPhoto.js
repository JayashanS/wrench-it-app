import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

const PhotoUploadComponent = ({ onCloseModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [displayUrl, setDisplayUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
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

      const response = await fetch(
        "http://localhost:4000/api/photo/user/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload photo.");
      }

      setUploadError(null);
      setSelectedFile(null);
      setPreviewUrl(null);

      const photoResponse = await fetch(
        `http://localhost:4000/api/photo/user/${user.email}.jpg`
      );
      if (photoResponse.ok) {
        const photoUrl = await photoResponse.blob();
        setDisplayUrl(URL.createObjectURL(photoUrl));
      } else {
        throw new Error("Failed to retrieve uploaded photo.");
      }

      onCloseModal();
    } catch (error) {
      console.error("Error uploading photo:", error);
      setUploadError("An error occurred while uploading the photo.");
    } finally {
      setUploading(false);
      window.location.reload();
    }
  };

  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <TextField
            type="file"
            onChange={handleFileChange}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleUpload}
            disabled={uploading || !selectedFile}
            variant="contained"
            color="primary"
          >
            {uploading ? "Uploading..." : "Upload Photo"}
          </Button>
        </Grid>
      </Grid>
      {previewUrl && (
        <div>
          <p>Preview:</p>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: "100%" }} />
        </div>
      )}
      {uploadError && <p>{uploadError}</p>}
      {displayUrl && (
        <div>
          <p>Uploaded Photo:</p>
          <img src={displayUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default PhotoUploadComponent;
