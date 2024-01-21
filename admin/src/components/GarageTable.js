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
import { Link } from "react-router-dom";

const GaragesTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/garage");
        const jsonData = await response.json();
        setData(sortData(jsonData));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (garageId) => {
    try {
      await fetch(`http://localhost:4000/api/garage/${garageId}`, {
        method: "DELETE",
      });

      setData((prevData) => prevData.filter((item) => item._id !== garageId));
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
    <ThemeProvider theme={lightTheme}>
      <Paper elevation={0}>
        <Table stickyHeader sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={centeredCellStyle}></TableCell>
              <TableCell sx={centeredCellStyle}>ID</TableCell>
              <TableCell sx={centeredCellStyle}>Name</TableCell>
              <TableCell sx={centeredCellStyle}>Address</TableCell>
              <TableCell sx={centeredCellStyle}>Owner</TableCell>
              <TableCell sx={centeredCellStyle}>No. of Workers</TableCell>
              <TableCell sx={centeredCellStyle} />
              <TableCell sx={centeredCellStyle} />
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
                  {item.repairCenterName}
                </TableCell>
                <TableCell sx={centeredCellStyleBody}>{item.address}</TableCell>
                <TableCell sx={centeredCellStyleBody}>
                  {item.ownerName}
                </TableCell>
                <TableCell sx={centeredCellStyleBody}>
                  {item.numOfWorkers}
                </TableCell>
                <TableCell sx={{ ...centeredCellStyle }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to="/drivers"
                  >
                    View
                  </Button>
                </TableCell>
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

export default GaragesTable;
