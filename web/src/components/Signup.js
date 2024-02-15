import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
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
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [bday, setBday] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    await signup(fname, lname, bday, email, pw, cpw);
    navigate("/dashboard");
  };

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
              onChange={(e) => setFname(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              sx={{ width: "80%", marginLeft: "50px" }}
              size="small"
              onChange={(e) => setLname(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]} size="small">
                <DatePicker
                  label="Birthday"
                  value={bday}
                  onChange={(date) => setBday(date)}
                  renderInput={(props) => <TextField {...props} />}
                />
              </DemoContainer>
            </LocalizationProvider>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              sx={{ width: "80%", marginLeft: "50px" }}
              size="small"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              sx={{ width: "250px", marginLeft: "50px" }}
              size="small"
              onChange={(e) => setPw(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              type="password"
              sx={{ width: "250px", marginLeft: "50px" }}
              size="small"
              onChange={(e) => setCpw(e.target.value)}
            />
            <br />
            {error && <div className="signup-error">{error}</div>}
            <Button
              variant="contained"
              style={{ color: "white", width: "80%" }}
              onClick={handleSubmit}
            >
              Register
            </Button>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}
