import { AddIcCall } from "@mui/icons-material";
import * as React from "react";
import InventoryCard from "./InventoryCard";
import bandaid from "./bandaid.jpg";

const inventory = [
  {
    item_name: "Band-aid",
    image:
      "https://i5.walmartimages.com/asr/91b5249d-ef04-4ada-bb04-940073392c19.861e87be53ce78be4d0c29534f0fb647.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    available: 800,
    status: "Sufficient",
    supplier: "McKesson",
    shelf_life: 300,
    min_quantity: 500,
    max_quantity: 1500,
    time_to_recieve: 3,
    priority: "Medium",
  },
  {
    item_name: "Saline ",
    image:
      "https://cdn.shopify.com/s/files/1/0156/0557/products/1000ml_Nacl_cabc8a59-3278-40bd-886b-2b4a73ed80a4_720x.jpg?v=1645300581",
    available: 500,
    status: "Deficient",
    supplier: "McKesson",
    shelf_life: 5,
    min_quantity: 750,
    max_quantity: 1000,
    time_to_recieve: 6,
    priority: "High",
  },
  {
    item_name: "Thermometer",
    image:
      "https://cdn.shopify.com/s/files/1/1046/1086/products/welch-allyn-suretemp-plus-690-thermometer_700x.jpg?v=1643003509",
    available: 60,
    status: "Sufficient",
    supplier: "McKesson",
    shelf_life: 500,
    min_quantity: 50,
    max_quantity: 140,
    time_to_recieve: 10,
    priority: "Low",
  },
  {
    item_name: "Blankets",
    image:
      "https://i5.walmartimages.com/asr/45af1e6d-a223-40ba-8a51-2195b692ea3b.925b86bae1e74234f55d380227a48bf2.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    available: 310,
    status: "Surplus",
    supplier: "McKesson",
    shelf_life: 365,
    min_quantity: 100,
    max_quantity: 300,
    time_to_recieve: 15,
    priority: "Medium",
  },
  {
    item_name: "Tylenol",
    image:
      "https://i5.walmartimages.com/asr/2e59b425-024f-476f-a62d-dfda56f23d1d.3ea856ebbd8d75d4dcf2714db1e2678e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    available: 500,
    status: "Sufficient",
    supplier: "McKesson",
    shelf_life: 70,
    min_quantity: 300,
    max_quantity: 600,
    time_to_recieve: 7,
    priority: "High",
  },
  {
    item_name: "B12",
    image:
      "https://i5.walmartimages.com/asr/239454c1-854c-43f6-b988-a983c250cb04.ecabd561f76dd85f7ac471b6d7765519.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    available: 30,
    status: "Deficient",
    supplier: "McKesson",
    shelf_life: 50,
    min_quantity: 50,
    max_quantity: 100,
    time_to_recieve: 2,
    priority: "Low",
  },
  {
    item_name: "Oral syringe",
    image:
      "https://i5.walmartimages.com/asr/dd0194be-61c1-4ec4-865d-4c9eb5c01ea2.b736ed5bbd95c8d707bff32b32f95785.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    available: 10,
    status: "Deficient",
    supplier: "McKesson",
    shelf_life: 50,
    min_quantity: 50,
    max_quantity: 100,
    time_to_recieve: 3,
    priority: 1,
  },
  {
    item_name: "Big Mac",
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:product-header-desktop?wid=830&hei=456&dpr=off",
    available: "1",
    status: "Sufficient",
    supplier: "McDonalds",
    shelf_life: 1,
    min_quantity: 1,
    max_quantity: 5,
    time_to_recieve: 0.05,
    priority: "Very High",
  },
];
const Inventory = (props) => {
  return inventory.map((item) => {
    return <InventoryCard key={item.item_name + item.available} item={item} />;
  });
};

export default Inventory;
