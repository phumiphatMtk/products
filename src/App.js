import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import homeComponent from "./pages/home";
import detailsComponent from "./pages/detail";

import "./App.css";

function App() {
  return (
    <Router>
      <Route exact  path="/" component={homeComponent}></Route>
      <Route exact  path="/:id" component={detailsComponent}></Route>
    </Router>
  );
}

export default App;
