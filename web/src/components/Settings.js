import React, { useState } from "react";

import PropTypes from "prop-types";
import Info from "./Info";
import Services from "./Services";
import Location from "./Location";
import Operator from "./Operators";

import "../styles/Settings.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  createTheme,
  ThemeProvider,
  getContrastRatio,
} from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: "#09BEB1",
      contrastText: getContrastRatio("#09BEB1", "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Settings() {
  const [value, setValue] = React.useState(0);
  const [garageId, setGarageId] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onSaveGarageIdToSuperComponent = (id) => {
    console.log(`Garage ID saved in parent component: ${id}`);
    setGarageId(id);
    // You can use the id here or set it in the state as needed
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="settings-container">
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="settings-tabs-title"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Info"
              {...a11yProps(0)}
              sx={{
                "&:hover": { backgroundColor: "transparent" },
                textTransform: "none",
              }}
            />
            <Tab
              label="Services"
              {...a11yProps(1)}
              sx={{
                "&:hover": { backgroundColor: "transparent" },
                textTransform: "none",
              }}
            />
            <Tab
              label="Location"
              {...a11yProps(2)}
              sx={{
                "&:hover": { backgroundColor: "transparent" },
                textTransform: "none",
              }}
            />
            <Tab
              label="Operator"
              {...a11yProps(2)}
              sx={{
                "&:hover": { backgroundColor: "transparent" },
                textTransform: "none",
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} className="settings-tabs">
          <Info
            onSaveGarageIdToSuperComponent={onSaveGarageIdToSuperComponent}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} className="settings-tabs">
          <Services garageId={garageId} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} className="settings-tabs">
          <Location />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3} className="settings-tabs">
          <Operator />
        </CustomTabPanel>
      </Box>
    </ThemeProvider>
  );
}
