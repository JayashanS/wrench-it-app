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

const User = () => {
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

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#4e03fc",
        contrastText: "#fff",
      },
      secondary: {
        main: "#57a8b5",
        contrastText: "#fff",
      },
      background: {
        paper: "#060321",
      },
      text: {
        primary: "#05e0e8",
        secondary: "#a9b4c0",
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

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper>
        <Table stickyHeader sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ justifyContent: "center" }}>
              <TableCell></TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>No. of Workers</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item._id} sx={{ justifyContent: "center" }}>
                <TableCell></TableCell>
                <TableCell>{item.garageId}</TableCell>
                <TableCell>{item.repairCenterName}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.ownerName}</TableCell>
                <TableCell>{item.numOfWorkers}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary">
                    View
                  </Button>
                </TableCell>
                <TableCell>
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

export default User;
