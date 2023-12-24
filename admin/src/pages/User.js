import React, { useState, useEffect } from "react";
import {
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
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (garageId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/garage//${garageId}`,
        {
          method: "DELETE",
        }
      );

      const responseData = await response.json();
      console.log("Response after delete:", responseData);

      // Remove the deleted item from the state
      setData((prevData) => prevData.filter((item) => item._id !== garageId));
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Delete</TableCell> {/* New column for delete button */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item._id}</TableCell>
              <TableCell>{item.ownerName}</TableCell>
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
  );
};

export default User;
