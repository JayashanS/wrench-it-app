import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getContrastRatio } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import Logo from "../assets/wrenchit.png";
import "../styles/Signup.css";

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
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
            borderColor: "your_hover_color",
          },
          "&$focused $notchedOutline": {
            borderColor: "your_focus_color",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "your_label_color",
        },
      },
    },
  },
});

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-cols-2">
        <div className="signup-title-container">
          <img src={Logo} alt="Logo" className="signup-logo" />
          <span className="signup-title">Wrenchit</span>
        </div>
        <ThemeProvider theme={theme}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { ml: 5, mt: 2 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              sx={{
                width: "80%",
                marginLeft: "50px",
              }}
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              sx={{ width: "80%", marginLeft: "50px" }}
              size="small"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]} size="small">
                <DatePicker label="Birthday" size="medium" />
              </DemoContainer>
            </LocalizationProvider>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              sx={{ width: "80%", marginLeft: "50px" }}
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              sx={{ width: "250px", marginLeft: "50px" }}
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              type="password"
              sx={{ width: "250px", marginLeft: "50px" }}
              size="small"
            />
            <br />
            <br />
            <Button
              variant="contained"
              style={{ color: "white", width: "80%" }}
            >
              Register
            </Button>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}
