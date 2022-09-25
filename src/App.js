import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AppLayout from "./components/AppLayout";

function App() {
  const [tabSelected, setTabSelected] = useState("Inventory");
  return (
    <div className="App">
      <NavBar setTabSelected={setTabSelected} />
      <AppLayout tabSelected={tabSelected} />
    </div>
  );
}

export default App;
