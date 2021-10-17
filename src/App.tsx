import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter";
import { Timer } from "./Timer";

function App() {
  return (
    <div className="App">
      <Timer limit={60} />
    </div>
  );
}

export default App;
