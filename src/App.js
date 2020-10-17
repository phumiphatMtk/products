import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import homeComponent from "./pages/home";

import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" component={homeComponent}></Route>
    </Router>
  );
}

export default App;
