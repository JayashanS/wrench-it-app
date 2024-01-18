import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../styles/Inventory.css";

const Inventory = () => {
  return (
    <div className="inventory-container">
      <div className="inventory-col-1">
        <span>Inventory Addons</span>
        <TextField
          id="outlined-basic"
          label="Part Name"
          variant="outlined"
          size="small"
          className="info-field-text"
        />
      </div>
      <div className="inventory-col-2"></div>
    </div>
  );
};

export default Inventory;
