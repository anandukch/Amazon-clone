import React from "react";
import Header from "./Header";
import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route to path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route to path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
