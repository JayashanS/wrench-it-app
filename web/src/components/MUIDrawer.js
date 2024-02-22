import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function CustomDrawer() {
  const [selectedLink, setSelectedLink] = useState("/dashboard/view");
  const { logout } = useLogout();

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const handleLogout = async (e) => {
    logout();
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        marginTop: "60px",
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        <ListItem
          button
          component={Link}
          to="/dashboard/view"
          selected={selectedLink === "/dashboard/view"}
          onClick={() => handleLinkClick("/dashboard/view")}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/dashboard/req"
          selected={selectedLink === "/dashboard/req"}
          onClick={() => handleLinkClick("/dashboard/req")}
        >
          <ListItemIcon>
            <MinorCrashIcon />
          </ListItemIcon>
          <ListItemText primary="Request" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/dashboard/stat"
          selected={selectedLink === "/dashboard/stat"}
          onClick={() => handleLinkClick("/dashboard/stat")}
        >
          <ListItemIcon>
            <CarRepairIcon />
          </ListItemIcon>
          <ListItemText primary="Repair" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/dashboard/res"
          selected={selectedLink === "/dashboard/res"}
          onClick={() => handleLinkClick("/dashboard/res")}
        >
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Reservations" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/dashboard/com"
          selected={selectedLink === "/dashboard/com"}
          onClick={() => handleLinkClick("/dashboard/com")}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Community" />
        </ListItem>
        <Divider />
        <ListItem
          button
          component={Link}
          to="/dashboard/help"
          selected={selectedLink === "/dashboard/help"}
          onClick={() => handleLinkClick("/dashboard/help")}
        >
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/dashboard/photo"
          selected={selectedLink === "/dashboard/photo"}
          onClick={() => handleLinkClick("/dashboard/photo")}
        >
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/dashboard/set"
          selected={selectedLink === "/dashboard/set"}
          onClick={() => handleLinkClick("/dashboard/set")}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default CustomDrawer;
