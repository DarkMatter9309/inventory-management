import * as React from "react";
import Cart from "./Cart";
import Inventory from "./Inventory";
import Requirements from "./Requirements";
import Status from "./Status";

const AppLayout = (props) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {props.tabSelected === "Inventory" && <Inventory />}
      {props.tabSelected === "Upcoming requirements" && <Requirements />}
      {props.tabSelected === "Cart" && <Cart />}
      {props.tabSelected === "Order status" && <Status />}
    </div>
  );
};

export default AppLayout;
