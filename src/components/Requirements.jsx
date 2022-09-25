import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(
  name,
  quantity,
  consumed_daily,
  remaining_time,
  recommended_order,
  delivery
) {
  return {
    name,
    quantity,
    consumed_daily,
    remaining_time,
    recommended_order,
    delivery,
  };
}

const rows = [
  createData("Band-aid", 159, 6.0, 24, 400, 3),
  createData("Saline", 237, 9.0, 37, 300, 7),
  createData("Thermometer", 262, 16.0, 24, 60, 6),
  createData("Blankets", 305, 3, 67, 90, 4),
  createData("Tylenol", 356, 16.0, 49, 60, 3),
];

export default function Requirements() {
  return (
    <div style={{ margin: "2rem", width: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Item</TableCell>
              <TableCell align="center">Available</TableCell>
              <TableCell align="center">Consumed daily</TableCell>
              <TableCell align="center">Time left(days)</TableCell>
              <TableCell align="center">Recommended order quantity</TableCell>
              <TableCell align="center">Estimated delivery</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.consumed_daily}</TableCell>
                <TableCell align="center">{row.remaining_time}</TableCell>
                <TableCell align="center">{row.recommended_order}</TableCell>
                <TableCell align="center">{row.delivery}</TableCell>
                <TableCell>
                  <Button>Add to cart</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
