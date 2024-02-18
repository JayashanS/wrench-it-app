import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  ThemeProvider,
  createTheme,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "../styles/Operator.css";

const Operator = () => {
  let garageId = localStorage.getItem("garageId");
  const [data, setData] = useState([]);
  const [uname, setUname] = useState("");
  const [pw, setPw] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/operator/${garageId}`
      );
      const jsonData = await response.json();
      setData(sortData(jsonData));
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/operator/${id}`
      );
      fetchData();
    } catch (error) {
      console.error("Error Deleting data: ", error);
    }
  };
  const handleClick = useCallback(async () => {
    try {
      const updatedData = {
        garageId: garageId,
        opId: uname,
        pw: pw,
      };

      const response = await axios.post(
        `http://localhost:4000/api/operator/`,
        updatedData
      );

      console.log("Update successful:", response.data);
      fetchData();
    } catch (error) {
      console.error("Error Adding Operator:", error);
    }
  }, [garageId, uname, pw]);

  useEffect(() => {
    fetchData();
  }, [handleClick]); // Now handleClick can be safely included in the dependency array

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#007bff",
        contrastText: "#6e7278",
      },
      secondary: {
        main: "#6699ff",
        contrastText: "#fff",
      },
      background: {
        paper: "#fffffff",
      },
      text: {
        primary: "#09BEB1",
        secondary: "#09BEB1",
      },
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottomColor: "#e0e0e0",
          },
        },
      },
    },
  });

  const sortData = (data = [], sortBy = "garageId", ascending = true) => {
    return data.sort((a, b) => {
      const aValue = a[sortBy] ?? "";
      const bValue = b[sortBy] ?? "";
      return ascending
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });
  };

  const centeredCellStyle = {
    borderBottom: `1px solid ${lightTheme.palette.secondary.main}`,
    color: lightTheme.palette.primary.main,
    textAlign: "center",
  };

  const centeredCellStyleBody = {
    borderBottom: `1px solid ${lightTheme.palette.secondary.main}`,
    color: lightTheme.palette.primary.contrastText,
    textAlign: "center",
  };

  return (
    <div className="operator-container">
      <div className="operator-col-1">
        <span></span>
        <span className="operator-title">Access Control</span>
        <p className="operator-text">
          If you'd like to extend access to this application to others within
          your company, particularly at your repair center, you have the option
          to add them as operators. Once added, these individuals will be able
          to log in to the system using the username and password you've created
          for them.
        </p>
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
            label="Operator User Name"
            variant="outlined"
            type="email"
            sx={{ width: "60%", marginLeft: "50px" }}
            size="small"
            onChange={(event) => setUname(event.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            sx={{ width: "60%", marginLeft: "50px" }}
            size="small"
            onChange={(event) => setPw(event.target.value)}
          />

          <br />
          <Button
            variant="contained"
            style={{ color: "white", width: "60%", marginBottom: "15px" }}
            onClick={handleClick}
          >
            Add
          </Button>
        </Box>
      </div>
      <div className="operator-col-2">
        <ThemeProvider theme={lightTheme}>
          <Paper elevation={0}>
            <Table stickyHeader sx={{ minWidth: 650 }} size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={centeredCellStyle}></TableCell>
                  <TableCell sx={centeredCellStyle}>Garage ID</TableCell>
                  <TableCell sx={centeredCellStyle}>
                    Operator User Name
                  </TableCell>
                  <TableCell sx={centeredCellStyle}>Password</TableCell>
                  <TableCell sx={centeredCellStyle}>Role</TableCell>
                  <TableCell sx={centeredCellStyle}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell sx={centeredCellStyle}></TableCell>
                    <TableCell sx={centeredCellStyleBody}>
                      {item.garageId}
                    </TableCell>
                    <TableCell sx={centeredCellStyleBody}>
                      {item.opId}
                    </TableCell>
                    <TableCell sx={centeredCellStyleBody}>{item.pw}</TableCell>
                    <TableCell sx={centeredCellStyleBody}>
                      {item.role}
                    </TableCell>
                    <TableCell sx={centeredCellStyleBody}>
                      <IconButton aria-label="delete">
                        <DeleteIcon
                          color="error"
                          onClick={() => handleDelete(item._id)}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Operator;
