import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter limit={60} />
    </div>
  );
}

export default App;
