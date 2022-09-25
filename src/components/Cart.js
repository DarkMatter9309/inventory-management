import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function createData(name, use, cost, ordered_quanity) {
  return {
    name,
    use,
    cost,
    ordered_quanity,
  };
}

const rows = [
  createData("Band-aid", "Injury", 2, 400),
  createData("Saline", "Sinuses, Dehydration", 8, 300),
  createData("Thermometer", "Check Temperature", 15, 60),
  createData("Blankets", "Control Temperature", 6, 90),
  createData("Tylenol", "Headache", 22, 60),
];

export default function Cart() {
  return (
    <div style={{ margin: "2rem", width: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Item</TableCell>
              <TableCell align="center">Use</TableCell>
              <TableCell align="center">Price per item</TableCell>
              <TableCell align="center">Ordered quantity</TableCell>
              <TableCell align="center">Total price</TableCell>
              <TableCell align="center">
                <Button variant="contained">Confirm all</Button>
              </TableCell>
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
                <TableCell align="center">{row.use}</TableCell>
                <TableCell align="center">{row.cost}</TableCell>
                <TableCell align="center">{row.ordered_quanity}</TableCell>
                <TableCell align="center">
                  {row.ordered_quanity * row.cost}
                </TableCell>
                <TableCell align="center">
                  <Button>Confirm</Button>
                </TableCell>
                <TableCell align="center">
                  <Button>
                    <CloseIcon color="error" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="success" sx={{ margin: "2rem" }}>
        Complete Order
      </Button>
    </div>
  );
}
