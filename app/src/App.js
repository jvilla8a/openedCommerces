import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Routes from "./routes";

function App() {
  return (
    <Router className="App">
      <Routes isAuthenticated />
    </Router>
  );
}

export default App;
