import React, { useState, useEffect, useRef } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Edit, Save } from "@mui/icons-material";

const EditableField = ({ label, value, fieldType, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);
  const inputRef = useRef(null);

  const handleEditToggle = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleValueChange = (event) => {
    setEditedValue(event.target.value);
  };

  const handleSave = () => {
    onSave(editedValue);
    setIsEditing(false);
  };

  useEffect(() => {
    setEditedValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <InputLabel htmlFor={`outlined-adornment-${fieldType}`}>
        {label}
      </InputLabel>
      <OutlinedInput
        id={`outlined-adornment-${fieldType}`}
        type="text"
        value={isEditing ? editedValue : value}
        onChange={handleValueChange}
        onBlur={handleSave}
        onFocus={handleEditToggle}
        readOnly={!isEditing}
        inputRef={inputRef}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={`toggle edit ${fieldType}`}
              onClick={handleEditToggle}
              edge="end"
            >
              {isEditing ? <Save /> : <Edit />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};

export default EditableField;
