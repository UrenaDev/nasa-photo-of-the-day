import React from "react";
import "./App.css";
import CardDisplay from "./components/CardDisplay";

function App() {
  return (
    <div className="App">
      <h1>NASA Photo of the day!</h1>
      <CardDisplay limit = {1} />
    </div>
  );
}

export default App;
