import React, { useState, useEffect } from "react";
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

const RepairTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/repair");
        const jsonData = await response.json();
        setData(sortData(jsonData));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (repairId) => {
    try {
      await fetch(`http://localhost:4000/api/repair/${repairId}`, {
        method: "DELETE",
      });

      setData((prevData) => prevData.filter((item) => item._id !== repairId));
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#007bff", // Light blue primary color
        contrastText: "#6e7278",
      },
      secondary: {
        main: "#6699ff", // Lighter blue for accents
        contrastText: "#fff",
      },
      background: {
        paper: "#fffffff", // Light gray background
      },
      text: {
        primary: "#333", // Darker text for contrast
        secondary: "#666", // Slightly lighter text
      },
    },
  });

  const sortData = (data = [], sortBy = "repairId", ascending = true) => {
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
    <ThemeProvider theme={lightTheme}>
      <Paper elevation={0}>
        <Table stickyHeader sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={centeredCellStyle}></TableCell>
              <TableCell sx={centeredCellStyle}>Repair ID</TableCell>
              <TableCell sx={centeredCellStyle}>License Plate Number</TableCell>
              <TableCell sx={centeredCellStyle}>Model</TableCell>
              <TableCell sx={centeredCellStyle}>Fault</TableCell>
              <TableCell sx={centeredCellStyle}>NIC</TableCell>
              <TableCell sx={centeredCellStyle}>Phone Number</TableCell>
              <TableCell sx={centeredCellStyle}>Date</TableCell>
              <TableCell sx={centeredCellStyle}>Status</TableCell>
              <TableCell sx={centeredCellStyle}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item._id}>
                <TableCell sx={centeredCellStyle}></TableCell>
                <TableCell sx={centeredCellStyleBody}>
                  {item.repairId}
                </TableCell>
                <TableCell sx={centeredCellStyleBody}>
                  {item.licensePlateNo}
                </TableCell>
                <TableCell sx={centeredCellStyleBody}>{item.model}</TableCell>
                <TableCell sx={centeredCellStyleBody}>{item.fault}</TableCell>
                <TableCell sx={centeredCellStyleBody}>{item.NIC}</TableCell>
                <TableCell sx={centeredCellStyleBody}>{item.phoneNo}</TableCell>
                <TableCell sx={centeredCellStyleBody}>{item.date}</TableCell>
                <TableCell sx={centeredCellStyleBody}>{item.status}</TableCell>
                <TableCell sx={{ ...centeredCellStyle }}>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </ThemeProvider>
  );
};

export default RepairTable;
