import React, { useState } from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";

const AddForm = ({ garageId }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="AddForm Tabs">
        <Tab label="Repair" />
        <Tab label="Request" />
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* Repair Tab Content */}
        <Typography>Repair for garage ID: {garageId}</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Request Tab Content */}
        <Typography>Request for garage ID: {garageId}</Typography>
      </TabPanel>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default AddForm;
