import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import { PropaneSharp } from "@mui/icons-material";
import TextField from "@mui/material/TextField";

export default function EditRequirements(props) {
  const handleSave = () => {};
  return (
    <React.Fragment>
      <Dialog
        fullWidth={"lg"}
        maxWidth={"lg"}
        open={props.open}
        onClose={props.handleClose}
      >
        <DialogTitle>{props.item.item_name} requirements</DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={props.item.image} width="300" height="300" />
          <div>
            <table>
              <tr>
                <td>Shelf Life</td>
                <td>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={props.item.shelf_life}
                  />
                </td>
              </tr>
              <tr>
                <td>Minimum quanity</td>
                <td>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={props.item.min_quantity}
                  />
                </td>
              </tr>
              <tr>
                <td>Maximum quanity</td>
                <td>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={props.item.max_quantity}
                  />
                </td>
              </tr>
              <tr>
                <td>Time to recieve</td>
                <td>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={props.item.time_to_recieve}
                  />
                </td>
              </tr>
              <tr>
                <td>Priority</td>
                <td>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={props.item.priority}
                  />
                </td>
              </tr>
            </table>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
          <Button onClick={props.handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
