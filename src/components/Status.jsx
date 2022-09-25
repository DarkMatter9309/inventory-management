import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(name, ordered_quanity, supplier, eta, status) {
  return {
    name,
    ordered_quanity,
    supplier,
    eta,
    status,
  };
}

const rows = [
  createData("Band-aid", 22, "McKesson", 3, "Recieved"),
  createData("Saline", 33, "McKesson", 7, "In Transit"),
  createData("Thermometer", 44, "McKesson", 1, "Out for delivery"),
  createData("Blankets", 55, "McKesson", "NA", "Canceled"),
  createData("Tylenol", 66, "McKesson", 7, "Being prepared"),
];

const status = [
  {
    item: "Band-aid",
    ordered_quantity: 22,
    supplier: "McKesson",
    eta: 3,
    status: "Recieved",
  },
  {
    item: "Saline",
    ordered_quantity: 7,
    supplier: "McKesson",
    eta: 7,
    status: "In Tansit",
  },
  {
    item: "Thermometer",
    ordered_quantity: 44,
    supplier: "McKesson",
    eta: 1,
    status: "Out for delivery",
  },
  {
    item: "Blankets",
    ordered_quantity: 55,
    supplier: "McKesson",
    eta: null,
    status: "Canceled",
  },
  {
    item: "Tylenol",
    ordered_quantity: 66,
    supplier: "McKesson",
    eta: 7,
    status: "Being prepared",
  },
];

export default function Cart() {
  return (
    <div style={{ margin: "2rem", width: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Item</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Supplier</TableCell>
              <TableCell align="center">Estimated arrival(days)</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {status.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.item}</TableCell>
                <TableCell align="center">{row.ordered_quantity}</TableCell>
                <TableCell align="center">{row.supplier}</TableCell>
                <TableCell align="center">{row.eta}</TableCell>
                <TableCell align="center">
                  <Button variant="contained">{row.status}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
