import React from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getContrastRatio } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Logo from "../assets/wrenchit.png";
import "../styles/Login.css";

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

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setpw] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, pw);
      console.error("going to dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-col">
        <div className="login-title-container">
          <img src={Logo} alt="Logo" className="login-logo" />
          <span className="login-title">Wrenchit</span>
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
              label="Email"
              variant="outlined"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: "80%", marginLeft: "50px" }}
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setpw(e.target.value)}
              sx={{ width: "80%", marginLeft: "50px" }}
              size="small"
            />
            {error && <div className="login-error">{error}</div>}

            <Button
              variant="contained"
              style={{ color: "white", width: "80%", marginBottom: "15px" }}
              onClick={handleLogin}
              disabled={isLoading}
            >
              Login
            </Button>
            <span style={{ color: "grey" }}>
              Do not have an account? <a style={{ color: "#09BEB1" }}>SignUp</a>
            </span>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}
