import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom"; // Import Link component

export default function TemporaryDrawer() {
  const [selectedPath, setSelectedPath] = React.useState("/"); // Track selected path

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        anchor="left"
        open
        variant="persistent"
        sx={{
          width: 250,
          flexShrink: 0,
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" component="div">
            Wrench it
          </Typography>
        </Box>
        <List>
          {[
            { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
            { text: "Garages", icon: <BusinessIcon />, path: "/garages" },
            { text: "Drivers", icon: <PeopleAltIcon />, path: "/drivers" },
          ].map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              selected={item.path === selectedPath} // Apply selected styling
              sx={{ "&:hover": { backgroundColor: "inherit" } }} // Remove hover effect
            >
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={() => setSelectedPath(item.path)} // Update selected path
              >
                {" "}
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[{ text: "Logout", icon: <LogoutIcon />, path: "/logout" }].map(
            (item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  {" "}
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/* Main content of the page goes here */}
      </Box>
    </Box>
  );
}
