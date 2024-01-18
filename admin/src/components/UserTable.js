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

const UserTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/user/");
        const jsonData = await response.json();
        setData(sortData(jsonData));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const sortData = (data) => {
    return data;
  };

  const handleDelete = async (_id) => {
    try {
      await fetch(`http://localhost:4000/api/user/${_id}`, {
        method: "DELETE",
      });

      setData((prevData) => prevData.filter((item) => item._id !== _id));
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
              <TableCell sx={centeredCellStyle}>User ID</TableCell>
              <TableCell sx={centeredCellStyle}>First Name</TableCell>
              <TableCell sx={centeredCellStyle}>Last Name</TableCell>
              <TableCell sx={centeredCellStyle}>Birthday</TableCell>
              <TableCell sx={centeredCellStyle}>Email</TableCell>
              <TableCell sx={centeredCellStyle}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item._id}>
                <TableCell sx={centeredCellStyle}></TableCell>
                <TableCell sx={centeredCellStyleBody}>{item._id}</TableCell>
                <TableCell sx={centeredCellStyleBody}>{item.fname}</TableCell>
                <TableCell sx={centeredCellStyleBody}>{item.lname}</TableCell>
                <TableCell sx={centeredCellStyleBody}>
                  {new Date(item.bday).toLocaleDateString()}
                </TableCell>
                <TableCell sx={centeredCellStyleBody}>{item.email}</TableCell>
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

export default UserTable;
