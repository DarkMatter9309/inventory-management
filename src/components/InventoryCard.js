import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import EditRequirements from "./EditRequirements";

export default function InventoryCard(props) {
  let colour = "none";
  if (props.item.status == "Deficient") {
    colour = "red";
  } else if (props.item.status == "Surplus") {
    colour = "green";
  }

  const [openDialog, setOpenDialog] = React.useState(false);
  const editRequrements = (props) => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Card
        sx={{
          width: 350,
          height: 400,
          marginTop: "0.5rem",
          marginLeft: "0.5rem",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="220"
            image={props.item.image}
            alt={props.item.item_name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name: {props.item.item_name}
            </Typography>
            <Typography variant="body2">
              Available: {props.item.available}
            </Typography>
            <Typography variant="body2" color={colour}>
              Status: {props.item.status}
            </Typography>
            <Typography variant="body2">
              Supplier: {props.item.supplier}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={editRequrements}>
            Edit requirement
          </Button>
        </CardActions>
      </Card>
      <EditRequirements
        item={props.item}
        open={openDialog}
        handleClose={handleClose}
      />
    </div>
  );
}
