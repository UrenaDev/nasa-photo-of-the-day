import React from "react";
import "./App.css";
import CardDisplay from "./components/CardDisplay";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from "reactstrap";

function App() {
  return (
    <div className="App">
      <Alert color="info">
        <h1>NASA Photo of the day!</h1>
      </Alert>
      <CardDisplay limit = {1} />
    </div>
  );
}

export default App;
