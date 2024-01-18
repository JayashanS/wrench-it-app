import * as React from "react";
import PropTypes from "prop-types";

import Info from "./Info";
import Pricing from "./Pricing";
import Location from "./Location";
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              label="Services & Pricing"
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
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} className="settings-tabs">
          <Info />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} className="settings-tabs">
          <Pricing />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} className="settings-tabs">
          <Location />
        </CustomTabPanel>
      </Box>
    </ThemeProvider>
  );
}
