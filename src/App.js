import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import homeComponent from "./pages/home";
import detailsComponent from "./pages/detail";
import cartComponent from "./pages/cart";

import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={homeComponent}></Route>
      <Route exact path="/product/:id" component={detailsComponent}></Route>
      <Route exact path="/cart" component={cartComponent}></Route>
    </Router>
  );
}

export default App;
