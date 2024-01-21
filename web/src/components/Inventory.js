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

import "../styles/Inventory.css";

const Inventory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/part/garage123"
        );
        const jsonData = await response.json();
        setData(sortData(jsonData));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (partId) => {
    try {
      await fetch(`http://localhost:4000/api/parts/${partId}`, {
        method: "DELETE",
      });

      setData((prevData) => prevData.filter((item) => item._id !== partId));
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  const lightTheme = createTheme({
    // Define your theme here
  });

  const sortData = (data = [], sortBy = "partId", ascending = true) => {
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
    color: "black",
    textAlign: "center",
  };

  return (
    <div className="inventory-container">
      <div className="inventory-col-1">
        <ThemeProvider theme={lightTheme}>
          <Paper elevation={0}>
            <Table stickyHeader sx={{ minWidth: 650 }} size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={centeredCellStyle}></TableCell>
                  <TableCell sx={centeredCellStyle}>Part ID</TableCell>
                  <TableCell sx={centeredCellStyle}>Part Name</TableCell>
                  <TableCell sx={centeredCellStyle}>Unit Price</TableCell>
                  <TableCell sx={centeredCellStyle}>Count</TableCell>
                  <TableCell sx={centeredCellStyle}>Description</TableCell>
                  <TableCell sx={centeredCellStyle}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell sx={centeredCellStyle}></TableCell>
                    <TableCell sx={centeredCellStyleBody}>
                      {item.partrId}
                    </TableCell>
                    <TableCell sx={centeredCellStyleBody}>
                      {item.partName}
                    </TableCell>
                    <TableCell sx={centeredCellStyleBody}>
                      {item.unitPrice}
                    </TableCell>
                    <TableCell sx={centeredCellStyleBody}>
                      {item.count}
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
      </div>
    </div>
  );
};

export default Inventory;
