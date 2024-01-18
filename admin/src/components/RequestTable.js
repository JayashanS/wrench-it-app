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

const RequestTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/request");
        const jsonData = await response.json();
        setData(sortData(jsonData));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (requestId) => {
    try {
      await fetch(`http://localhost:4000/api/request/${requestId}`, {
        method: "DELETE",
      });

      setData((prevData) => prevData.filter((item) => item._id !== requestId));
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  const lightTheme = createTheme({
    palette: {
      mode: "light",
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
        primary: "#333",
        secondary: "#666",
      },
    },
  });

  const sortData = (data = [], sortBy = "requestId", ascending = true) => {
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
              <TableCell sx={centeredCellStyle}>Request ID</TableCell>
              <TableCell sx={centeredCellStyle}>Request Type</TableCell>
              <TableCell sx={centeredCellStyle}>Request Status</TableCell>
              <TableCell sx={centeredCellStyle}>Request Date</TableCell>
              <TableCell sx={centeredCellStyle}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item._id}>
                <TableCell sx={centeredCellStyle}></TableCell>
                <TableCell sx={centeredCellStyleBody}>
                  {item.requestId}
                </TableCell>
                <TableCell sx={centeredCellStyleBody}>
                  {item.requestType}
                </TableCell>
                <TableCell sx={centeredCellStyleBody}>
                  {item.requestStatus}
                </TableCell>
                <TableCell sx={centeredCellStyleBody}>
                  {new Date(item.requestDate).toLocaleDateString()}
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

export default RequestTable;
